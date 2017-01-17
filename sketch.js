var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = 150;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800, 200);
  centerCanvas();
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