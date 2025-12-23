var svg = document.getElementById("basesvg");
let timerVeins = null;
let timerText = null;
let timerWavesBirds = null;
let num = 0;

svg.setAttribute("viewBox", "0 0 500 500");
svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

// ✅ 右下角裁切：只显示 x=250~500, y=250~500 的区域（正方形）
function ensureWavesClipLayer() {
  let layer = document.getElementById("wavesLayer");
  if (layer) return layer;

  // defs + clipPath
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clip.setAttribute("id", "clip-waves");

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 250);
  rect.setAttribute("y", 250);
  rect.setAttribute("width", 250);
  rect.setAttribute("height", 250);

  clip.appendChild(rect);
  defs.appendChild(clip);
  svg.appendChild(defs);

  // 专门放波浪的图层（被裁切）
  layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  layer.setAttribute("id", "wavesLayer");
  layer.setAttribute("clip-path", "url(#clip-waves)");
  svg.appendChild(layer);

  return layer;
}

// ✅ 不改 utils.js：专门画到指定图层
function drawCircleTo(parent, cx, cy, r, stroke, fill) {
  const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", cx);
  c.setAttribute("cy", cy);
  c.setAttribute("r", r);
  c.setAttribute("stroke", stroke);
  c.setAttribute("fill", fill);
  parent.appendChild(c);
}

drawRect(0,0,500,500,"black");//The whole background.
drawRect(0,250,250,125,"blue");

const userWords = document.getElementById("user-words");
const addWordsButton = document.getElementById("add-words");
addWordsButton.addEventListener("click", function() {
//When the user clicks the start button, the patterns would gradually appear.

//The definition of function of drawing the veins of a leaf.
function drawLeftVein(inputXPos, inputYPos){
    drawLine(inputXPos,inputYPos,inputXPos-65,inputYPos-20,1,"white");
    drawLine(inputXPos-65,inputYPos-20,inputXPos-105,inputYPos-40,1,"white");
    drawLine(inputXPos-105,inputYPos-40,inputXPos-125,inputYPos-60,1,"white");
    drawLine(inputXPos-105,inputYPos-40,inputXPos-125,inputYPos-45,1,"white");
    drawLine(inputXPos-65,inputYPos-20,inputXPos-85,inputYPos-50,1,"white");
    drawLine(inputXPos-32.5,inputYPos-10,inputXPos-45,inputYPos,1,"white");
}

function drawRightVein(inputXPos, inputYPos){
    drawLine(inputXPos,inputYPos,inputXPos+65,inputYPos-20,1,"white");
    drawLine(inputXPos+65,inputYPos-20,inputXPos+105,inputYPos-40,1,"white");
    drawLine(inputXPos+105,inputYPos-40,inputXPos+125,inputYPos-60,1,"white");
    drawLine(inputXPos+105,inputYPos-40,inputXPos+125,inputYPos-40,1,"white");
    drawLine(inputXPos+65,inputYPos-20,inputXPos+69,inputYPos-30,1,"white");
    drawLine(inputXPos+32.5,inputYPos-10,inputXPos+60,inputYPos-5,1,"white");
}

//The first part: a Leaf.
drawLine(125,0,125,250,1,"white");//The main vein.
let numVein=0;
function drawNextVeins() {
        drawLeftVein(125,240-numVein*60);
        drawRightVein(125,260-numVein*60);
        numVein++;
}
let stepInterval1 = 1000;
timerVeins = setInterval(drawNextVeins, stepInterval1);

//The second part: Words.
    let userNewWords = userWords.value;
    console.log(userNewWords);
    let counter = 0;
    function drawNextText() {
        counter++;
        let newYPos = counter * 30;
        newText=CreateText(260, newYPos, userNewWords);
        svg.appendChild(newText); 
        if(counter > 7){
        counter = 0;
        }
    }
let stepInterval2 = 800;
timerText = setInterval(drawNextText, stepInterval2);

//The bottom half.

//The definition of function of drawing the birds.
function drawBirds(circleXPos, circleYPos, radius){
    let segmentRadians = Math.PI / 2;
    let startAngle1 = 0;
    let endAngle = segmentRadians;
    let startXPos1 = circleXPos + radius * Math.cos(startAngle1);
    let startYPos1 = circleYPos + radius * Math.sin(startAngle1);
    let endXPos1 = circleXPos - radius * Math.cos(endAngle);
    let endYPos1 = circleYPos - radius * Math.sin(endAngle);
    let segment1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    segment1.setAttribute("d",`M ${startXPos1} ${startYPos1} A ${radius} ${radius} 0 0 0 ${endXPos1} ${endYPos1}`);
    segment1.setAttribute("stroke", "white");
    segment1.setAttribute("stroke-width", 2);
    segment1.setAttribute("fill", "none");
    svg.appendChild(segment1);//The left wing.

    let startAngle2 = Math.PI / 2;
    let startXPos2 = circleXPos + radius*2+ radius * Math.cos(startAngle2);
    let startYpos2 = circleYPos - radius * Math.sin(startAngle2);
    let segment2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    segment2.setAttribute("d",`M ${startXPos2} ${startYpos2} A ${radius} ${radius} 0 0 0 ${startXPos1} ${startYPos1}`);
    segment2.setAttribute("stroke", "white");
    segment2.setAttribute("stroke-width", 2);
    segment2.setAttribute("fill", "none");
    svg.appendChild(segment2);//The right wing.
}

//The definition of function of drawing the waves.
function drawWaves(inputXPos, inputYPos) {
  const wavesLayer = ensureWavesClipLayer(); // ✅ 每次确保有裁切层
  for (let i = 0; i < 10; i++) {
    drawCircleTo(wavesLayer, inputXPos + i * 160, inputYPos, 40, "aqua", "white");
    drawCircleTo(wavesLayer, inputXPos + 80 + i * 160, inputYPos, 40, "aqua", "blue");
  }
}

function drawNextWavesandBirds() {
    //The third part: Waves.
    let newXPos = 280- num * 120;
    let newYPos = 300+ num * 40;
    drawWaves(newXPos,newYPos);
    //The fourth part: Birds.
    drawRect(0,250,250,250,"black");
    drawRect(0,250,250,125,"blue");//draw the background for the birds.
    drawBirds(20+num*40,290+num*40,10);
    drawBirds(50+num*40,270+num*40,15);
    drawBirds(40+num*40,330+num*40,5);
    num++;
    if (num >= 6 && timerWavesBirds) {
    clearInterval(timerWavesBirds);
    timerWavesBirds = null;
  }
}
let stepInterval3 = 1000;
if(num < 6){
    timerWavesBirds = setInterval(drawNextWavesandBirds, stepInterval3);
}
} );

//When click clear button, the leaves, waves and veins would disappear.
const clearWordsButton = document.getElementById("clear-pattern");
clearWordsButton.addEventListener("click", function() {
  if (timerVeins) { clearInterval(timerVeins); timerVeins = null; }
  if (timerText) { clearInterval(timerText); timerText = null; }
  if (timerWavesBirds) { clearInterval(timerWavesBirds); timerWavesBirds = null; }

  // 重置计数
  num = 0;

  // 清空SVG
  svg.replaceChildren();

  // 重新画背景
  drawRect(0,0,500,500,"black");
  drawRect(0,250,250,125,"blue");
});


