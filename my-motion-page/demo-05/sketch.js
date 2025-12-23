//Inspired by the sentence below:
//“Too many lives drift like fallen leaves, 
//but only you rise, floating like golden rain.”
let flowers = [];
const numFlowers = 68; 
const stepSize = 1;

function initialiseFlowers() {
  flowers = []; 

  for (let i = 0; i < numFlowers; i++) {
    let flower = new Flower(
      random(width), 
      random(height/2)+height/2,//position the flower field in the lower half of the screen
      random(360),
      random(10, 120),
      color(255))
    flowers.push(flower); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  initialiseFlowers();
}

function draw() {
  background(0); 

  push();
  const s = 0.8;                 // 缩放比例：0.85~0.95 之间调
  translate(width * 0.06, 0); // 往右下挪一点点，避免贴边
  scale(s);

  if (Math.floor(frameCount / 120) % 2  == 0) {
    push();
    //spilled mug
    rotate(30);
    ellipse(250,30,40,40);
    fill(0);
    ellipse(250,30,20,20);//handle of the mug
    fill(120);
    rect(250,0,100,60);//body of the mug
    fill(255);
    ellipse(300,0,100,50);//rim of the mug
    //spilled flowers
    drawFlower(380,70,5);
    drawFlower(400,60,7);
    drawFlower(400,80,5);
    drawFlower(370,30,8);
    drawFlower(365,65,3);
    drawFlower(350,50,10);
    drawFlower(430,20,5);
    drawFlower(480,60,7);
    drawFlower(450,80,5);
    drawFlower(470,30,8);
    drawFlower(465,65,3);
    drawFlower(450,50,10);
    drawFlower(400,90,8);
    drawFlower(505,105,3);
    drawFlower(550,50,8);
    drawFlower(565,95,5);
    drawFlower(580,80,10);
    pop();
  }else{
    //upright mug
    ellipse(230,100,40,40);
    fill(0);
    ellipse(230,100,20,20);
    fill(120);
    rect(230,70,100,60);
    fill(255);
    ellipse(280,70,100,50);
    //flowers in the mug
    drawFlower(280,70,5);
    drawFlower(300,60,7);
    drawFlower(300,80,5);
    drawFlower(270,30,8);
    drawFlower(265,65,3);
    drawFlower(250,50,10);
  }

  translate(0, height * 0.10);  // ✅ 花海整体下移 10% 高度（你可调 0.06~0.15）
  for (const flower of flowers) {
    flower.update();
    flower.display();
  }
  pop();
}

function drawFlower(x,y,size){
  strokeWeight(size/10);
  stroke(0);
  ellipse(x, y, size);
  ellipse(x+size/2,y+size/2,size);
  ellipse(x-size/2,y+size/2,size);
  ellipse(x+size/2,y-size/2,size);
  ellipse(x-size/2,y-size/2,size);
}

class Flower {
  constructor(x, y, angle, diameter, colour) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.diameter = diameter;
    this.colour = colour;

    //The following few sentences on how to use lerp and isFalling to implement the flower falling process were assisted by ChatGPT.
    //The rest, including the flower rotation, positions, mug design and so on, are entirely original.
    this.startX = x;
    this.startY = y;
    this.targetX = x;
    this.targetY = y + random(0, 100); 
    this.startDiameter = 0; 
    this.targetDiameter = diameter; 
    this.progress = 0; 
    this.isFalling = true; // Determine if the falling process is finished.
  }
  display() {
    push();

    fill(this.colour);

    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.diameter);
    
    strokeWeight(0.01);
    ellipse(0, 0, 0.1);

    // Style for flowers
    fill(255);
    stroke(0);

    //petals
    ellipse(0.05,0.05,0.1);
    ellipse(-0.05,0.05,0.1);
    ellipse(0.05,-0.05,0.1);
    ellipse(-0.05,-0.05,0.1);

    pop();
  }
  update() {
    if (this.isFalling) {
      this.x = lerp(this.startX, this.targetX, this.progress);
      this.y = lerp(this.startY, this.targetY, this.progress);
      
      this.diameter = lerp(this.startDiameter, this.targetDiameter, this.progress);
      
      this.progress += 0.01; 
      
      if (this.progress >= 1) {
        this.isFalling = false; //finish falling
      }
    } else {
    // Start movig side to side after the flowers have fallen
      this.x += stepSize;

      if (this.x - this.diameter / 2 > width) {
        this.x = - this.diameter / 2;
      }
    }
    this.angle += stepSize;
  }
}