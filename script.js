// p5 file
// popping bubble wrap

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(211, 235, 238);
}


function popping (x, y) {
  if ((x <= (mouseX - 20) || x >= (mouseX + 20)) || (y <= (mouseY - 20) || y >= (mouseY + 20))) {
    stroke(48, 84, 90);
    fill(211, 235, 238);
    ellipse(x, y, 30, 30);
    stroke(238, 249, 250);
    fill(238, 249, 250);
    ellipse(x + 6, y - 7, 10, 5);
  } else {
    noStroke();
    fill(238, 249, 250);
    ellipse(x, y, 40, 40);
    noFill();
    stroke(48, 84, 90);
    arc(x + 40, y, 50, 50, radians(135), radians(225));
    arc(x - 40, y, 50, 50, radians(-45), radians(45));
    arc(x, y + 40, 50, 50, radians(225), radians(315));
    arc(x, y - 40, 50, 50, radians(45), radians(135));
  }
}

function bubbles (x, y) {
      stroke(48, 84, 90);
      fill(211, 235, 238);
      ellipse(x, y, 30, 30);
      stroke(238, 249, 250);
      fill(238, 249, 250);
      ellipse(x + 6, y - 7, 10, 5);
}



function draw () {

  stroke(48, 84, 90);
  fill(211, 235, 238);
  rect(0, 0, 798, 248);

  var x = 25;
  var y = 25;

  while (y <= 230) {
    while (x <= 780) {
      if (mouseIsPressed) {
        popping (x, y);
      } else {
        bubbles (x, y);
      }
      x += 50;
    }
    y += 50;
    x = 25;
  }
}
