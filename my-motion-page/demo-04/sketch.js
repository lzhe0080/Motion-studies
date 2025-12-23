let r,g,b;
let tr=255, tg=255, tb=255;  // text color (smoothed)
let lastMode = null;
let allX = [80, 80, 80, 80, 80, 80, 80, 100, 120, 160, 160, 160, 200, 200, 200, 220, 240, 240, 240, 300, 300, 320, 340, 340, 380, 380, 380, 380];
let allY = [120, 140, 160, 180, 200, 220, 240, 240, 240, 180, 220, 240, 200, 220, 240, 200, 200, 220, 240, 200, 240, 220, 200, 240, 160, 200, 220, 240];
//These two arrays contain the x,y positions of my name-Linxi.
let Buildings=[0,280,80,80,400,40,120,380,80,200,440,40,240,400,60,300,480,60,360,340,60,420,420,40,460,200,40];
//This array contains parameters of building positions. Each building contains 3 elements: x, y, width. Height could be calculated.
let LightsXPos=[20, 40, 20, 95, 140, 160, 260, 370, 390, 380, 475, 475, 435];
let LightsYPos=[320, 360, 400, 420, 400, 400, 420, 360, 390, 440, 260, 400, 470];
//These two arrays contain the x,y positions of the windows.
let fireworksTrailX=[440, 430, 420, 423, 430, 440, 445, 448, 440, 430, 420, 410 ];
let fireworksTrailY=[140, 145, 160, 175, 190, 205, 220, 240, 265, 280, 300, 320 ];
//These two arrays contain the x,y positions of the fireworks tail.

const BASE_W = 500;
const BASE_H = 530;
const ART_BOTTOM = 500; // 你楼画到500，下面留给文字（和你原作一致）

let operationMode = "still";
let canvasEl;

function setup() {
  canvasEl = createCanvas(windowWidth, windowHeight); // ✅ 画布跟iframe一样大
  r = random(255);
  g = random(255);
  b = random(255);

  // ✅ 让iframe里键盘更稳：点一下画面就能按1/2
  canvasEl.elt.setAttribute("tabindex", "0");
  canvasEl.elt.addEventListener("mousedown", () => canvasEl.elt.focus());
}


function draw() {
  // ✅ 计算把 500x530 等比缩放进 iframe
  const s = min(width / BASE_W, height / BASE_H);
  const ox = (width - BASE_W * s) / 2;
  const oy = height - BASE_H * s; // ✅ 贴底显示（建筑不飘）

  // ✅ still：每帧清空
  if (operationMode === "still") {
    clear();
    background(0);
  }
  // ✅ interactive：不要清空（保留叠加=烟花好看）
  // 不写 background()

  push();
  translate(ox, oy);
  scale(s);

  switch (operationMode) {
    case "still":
      drawBuildings();
      drawLights(255, 255, 255);
      break;

    case "interactive":
      // 你原来的逻辑
      drawMyName();
      drawFirework(440, 80, 50);
      drawFirework(90, 300, 30);
      drawTrails();
      drawBuildings();
      drawLights(255, 160, 122);
      break;
  }

    // 让文字颜色缓慢追随烟花颜色（不闪）
    if (operationMode === "interactive") {
      tr = lerp(tr, r, 0.08);
      tg = lerp(tg, g, 0.08);
      tb = lerp(tb, b, 0.08);
    } else {
      tr = lerp(tr, 255, 0.08);
      tg = lerp(tg, 255, 0.08);
      tb = lerp(tb, 255, 0.08);
    }

    noStroke();
    fill(tr, tg, tb);
    textSize(14);
    text(`Press 2 to set off the fireworks, press 1 to extinguish.`, 8, 520);

  pop();
}


function drawMyName(){
  for(let i = 0; i < allX.length; i++){
    drawFirework(allX[i],allY[i],10);
}
}

function drawFirework(inputXPos,inputYPos,inputMaxLength){
  let nextX=inputXPos+random(-inputMaxLength,inputMaxLength);
  let nextY=inputYPos+random(-inputMaxLength,inputMaxLength);
  r += random(-10,10);
  g += random(-10,10);
  b += random(-10,10);
  r = constrain(r, 150, 250);
  g = constrain(g, 70, 170);
  b = constrain(b, 70, 100);
  stroke(r, g, b);
  line(inputXPos,inputYPos, nextX, nextY);
}

function drawTrails(){
  for(let i = 0; i < fireworksTrailX.length; i++){
    drawFirework(fireworksTrailX[i],fireworksTrailY[i],3);
  }
}

function drawBuildings(){
  stroke(238,232,170);
  for(i=0;i<Buildings.length-2;i=i+3){
    if((i+3)%6==0){
      fill(192);
      rect(Buildings[i],Buildings[i+1],Buildings[i+2],500-Buildings[i+1]);
    }else{
      fill(143,188,143);
      rect(Buildings[i],Buildings[i+1],Buildings[i+2],500-Buildings[i+1]);
    }
  }
}

function drawLights(inputR,inputG,inputB){
  fill(inputR,inputG,inputB);
  stroke(238,232,170);
  for(i=0;i<LightsXPos.length;i++){
    rect(LightsXPos[i],LightsYPos[i],20,20);
  }
}

function keyPressed() {
  if (key == "1") {
    operationMode = "still";
  }
  if (key == "2") {
    operationMode = "interactive";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//No AI tools are used.