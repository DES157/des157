console.log("this is mysketch.js comment");

var ghx, ghy, elx, ely, erx, ery, d; //groundhogX and Y, eyeleftX and Y, eyerightX and Y, diameter

function setup() {
    var myCanvas = createCanvas(800, 250);
    //has to parent to an id 
    myCanvas.parent('mySketch');
     background(244, 66, 83);
}

function draw() {
  if (mouseIsPressed) {
    fill(244, 66, 83);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}