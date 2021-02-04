
// Setup code goes here
function setup() {
  createCanvas(800, 800);
  noStroke();
  noCursor();
}


// Draw code goes here
function draw() {
  background(100,246,177);
  noStroke();
  rectMode(CORNER);
  fill(850-mouseX);
  rect(0,0,800,350);
  fill(236,129,35);
  ellipse(mouseX,100,100,100);
  fill(231,83,130);
  rectMode(CENTER);
  rect(300,375,350,350);
  fill(104,88,67);
  triangle(100,200,300,50,500,200);
  fill('white');
  stroke('black');
  strokeWeight(5);
  ellipse(300,275,50,75);
  noStroke();
  fill(78,65,88);
  rect(300,488,75,125);
  fill('white');
  ellipse(320,485,15,15);
  rect(200,485,60,75);
  rect(400,485,60,75);
  rect(200,275,60,75);
  rect(400,275,60,75);

}