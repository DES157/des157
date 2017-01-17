// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

var img;
var x = 0;

function preload() {
  img = loadImage("images/color_circles.jpg");
}

function setup() {
  //create a variable that references the html5 canvas
  //remember, what was called size() in Processing is called
  //createCanvas() is p5.js
  var myCanvas = createCanvas(800,250);

  //parent the myCanvas variable to the html element titled "mySketch"
  myCanvas.parent('mySketch');
  loadImage("images/color_circles.jpg", function(img) {
    image(img, 0, 0);
  });
}

function draw() {
  background(255);
  translate(width/2, height/2);
  rotate(radians(0+x));

  imageMode(CENTER);
  //img.resize(1000,0);
  image(img, 0, 0);

  //rectMode(CENTER);
  //rect(0, 0, 52, 52);
}

function mouseReleased() {
  if (mouseButton == LEFT) {
    x+=10*PI;
  } else {
    x-=10*PI;
  }
}
