// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

var x = 0; //rotation increments start
var s = 60; // size of square
var o = 0;  //origin

function setup() {
  //create a variable that references the html5 canvas
  //remember, what was called size() in Processing is called
  //createCanvas() is p5.js
  var myCanvas = createCanvas(800,250);

  //parent the myCanvas variable to the html element titled "mySketch"

}

function draw() {
  background(255);
  translate(width/2, height/2);
  rotate(radians(0+x));

  noStroke();
  fill(234, 195, 36);
  rectMode(CENTER);
  rect(0, 0, s, s);
}

function mouseReleased() {
  if (mouseButton == LEFT) {
    x+=10*PI;
  } else {
    x-=10*PI;
  }
}
