let perlinNoiseArray = [];
let valueArrayLength = 50;
let perlinNoiseStep = 0.1;

//this is a wave class, it will draw a single wave line across the screen
class Wave {
  // Constructor with parameters for amplitude, frequency, yBase, color, and strokeWeight
  //The amplitude is the height of the wave
  //The frequency is how often peaks and troughs occur - how far we move across the noise function for each point of the wave
  //The yBase is the y position of the wave
  //The color is the color of the wave.
  //The strokeWeight is the thickness of the wave line.
  constructor(amplitude, frequency, yBase, color, strokeWeight) {
    this.amplitude = amplitude; // Height of the wave
    this.frequency = frequency; // How often peaks and troughs occur
    this.yBase = yBase; // Base line of the wave
    this.offset = 0 // Initial offset for Perlin noise
    this.color = color; // Color of the wave
    this.strokeWeight = strokeWeight; // Thickness of the wave line
  }

  // Method to display the wave
  display() {
    noFill();
    //set the colour
    stroke(this.color);
    //set the stroke weight (different for each class instance)
    strokeWeight(this.strokeWeight);
    // Begin the shape
    beginShape();
    // xoff is the offset for Perlin noise - inside each class instance
    //as we move across the screen we increment xoff by the frequency
    //this will generate different wave patterns for each wave
    //To do this we start our wave noise sampling with the class instances offset
    let xoff = this.offset; 
    //Now we move across the screen, left to right in steps of 10 pixels
    for (let x = 0; x <= width; x += 10) {
      //Every 10 pixels we sample the noise function
      let waveHeight = map(noise(xoff), 0, 1, -this.amplitude, this.amplitude);
      //We draw a vertex at the x position and the yBase position + the wave height
      vertex(x, this.yBase + waveHeight);
      //we are still inside the for loop, so we increment xoff by the frequency
      //Increasing xoff here means the next wave point will be sampled from a different part of the noise function
      xoff += this.frequency;
    }
    //now we reached the edge of the screen we end the shape
    endShape();
    //Now we increment the class instances offset, ready for the next frame
    this.offset += 0.005; // Smaller increment for smoother animation
  }

}

// Fish class to manage fish movement
// I used ChatGPT to help me create fish class
class Fish {
  constructor(wave, xSpeed) {
    this.wave = wave;//Which wave that the fish follows
    this.x = random(width);//Initial x position
    this.y = this.wave.yBase;//Initial y position based on the wave
    this.xSpeed = xSpeed;//the swimming speed of fish movement
  }
  
  update() {
    // Use Perlin noise to control the fish's vertical movement, making it float with the wave
    // Since the fishes follow the waves, resizing the window will change their movement as the wave positions shift.
    let waveHeight = map(noise(this.wave.offset), 0, 1, -this.wave.amplitude, this.wave.amplitude);
    this.y = this.wave.yBase + waveHeight;
    
    this.x -= this.xSpeed;
    if (this.x < 0) {
    this.x = width;// When the fish goes off-screen, reappear from the right
    }
  }
  
  display() {
    let alpha = map(this.y, height*0.25, height, 50, 200);
    fill(255, 255, 255, alpha);
    noStroke();
    drawFish(this.x, this.y);
  }
}

// Array to store multiple waves
let waves = [];
let fishes = [];
// Number of waves to create
let numWaves = 15;

function setup() {
  // Create the canvas filling the window
  createCanvas(windowWidth, windowHeight);
  // Create multiple waves with varying properties
  angleMode(DEGREES);
  for (let i = 0; i < valueArrayLength; i += perlinNoiseStep) {
    perlinNoiseArray.push(noise(i));
  }
  for (let i = 0; i < numWaves; i++) {
    //We are moving down the screen as we set the yBase for each new wave
    let yBase =  i * height /numWaves;
    //As we move down the screen i gets bigger and so does the amplitude
    let amplitude = 20 + i * 10; 
    //As we move down the screen the waves get darker by increasing the alpha value of the colour
    let waveColor = color(0, 0, 255, 20 + i * 10); 
    //As we move down the screen the waves get heavier by increasing the stroke weight
    let strokeW = 1 + i; 
    waves.push(new Wave(amplitude, random(0.01, 0.02), yBase, waveColor, strokeW));
  }
  // Create multiple fishes
  for (let i = 0; i < 10; i++) {
    let waveIndex = Math.floor(random(numWaves));
    let xSpeed = random(0.5, 2.5);
    fishes.push(new Fish(waves[waveIndex], xSpeed));
  }
}

function draw() {
  // Set the background color to an ocean blue
  background(10, 24, 72); 
  // Update all waves
  for (let i = 0; i < waves.length; i++) {
    waves[i].display();
  }
  // Update all fishes
  for (let i = 0; i < fishes.length; i++) {
    fishes[i].update();
    fishes[i].display();
  }
  // Draw the wave reflection
  drawReflection(noise(random(5))*width,noise(random(5))*height,random(15));
  // Draw the moon reflection
  drawMoon(width*0.25,width*0.25,height*0.3);//The shape of the moon would change with the window size
}

function drawMoon(x,y,radius){
  // ✅ 关键：把 130 变成随画布变化、且有上限的值
  const spread = constrain(width * 0.18, 90, 150);

  for(i=0;i<180;i+=10){
    stroke(255,255,0,255*i/180);
    strokeWeight(5);

    line(
      x - radius*sin(i) + perlinNoiseArray[frameCount % valueArrayLength] * 7,
      y - radius + i/10*8,
      x + radius*sin(i) - (radius + spread) * sin(i) + perlinNoiseArray[frameCount % valueArrayLength] * 5,
      y - radius + i/10*8
    );
  }
}


function drawFish(x,y){
  noStroke();
  triangle(x, y, x+20, y+13, x+20, y-13);//Fish body
  triangle(x+20, y-13, x+20, y+13, x+40, y);
  triangle(x+40, y, x+50, y-10, x+50, y+10);//Fish tail
  fill(0);
  circle(x+10,y,3);//Fish eye
}

function drawReflection(x,y,size){
  stroke(255);
  strokeWeight(2);
  line(x-size,y,x+size,y);
  line(x,y-size,x,y+size);
}

function windowResized() {
  // Resize the canvas when the window is resized. This will update the width and height variables 
  // that are used to calculate the size and position of the shapes.
  resizeCanvas(windowWidth, windowHeight);
  // Recalculate wave positions and amplitudes, which is inspired by ChatGPT as well
  for (let i = 0; i < waves.length; i++) {
    let yBase = i * height / numWaves;
    waves[i].yBase = yBase;
  }
}