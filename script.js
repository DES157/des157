// p5 file

console.log("this is mysketch.js comment");

var style = 0;
var weight = 1;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  var myCanvas = createCanvas(800, 250);

  myCanvas.parent('mySketch');

  background(255);

}

function mouseDragged()
{
  if(style == 0) {
    strokeWeight(weight);
    stroke(r, g, b);
  line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    noStroke();
    fill(r, g, b);
    rect(pmouseX, pmouseY, 10 , 30);
  }
}


function draw() {
   strokeWeight(2);
  stroke(0);
  fill(196,53,53);
  rect(10, 100, 20, 20);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>100 && mouseY <120){

      r = 196;
      b = 53;
      g = 53;
    }
  }

  stroke(0);
  fill(55,178,44);
  rect(10, 125, 20, 20);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>125 && mouseY <145){
      r = 55;
      b = 44;
      g = 178;
    }
  }

  stroke(0);
   fill(38,112,168);
  rect(10, 150, 20, 20);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>150 && mouseY <170){
      r = 38;
      b = 168;
      g = 112;
    }
  }
  stroke(0);
   fill(127,61,170);
  rect(10, 175, 20, 20);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>175 && mouseY <195){
      r = 127;
      b = 170;
      g = 61;
    }
  }
  stroke(0);
   fill(255,255,255);
  rect(10, 200, 20, 20);
  fill(250,150,255);
  rect(15, 205, 8, 15);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>200 && mouseY <220){

      r = 255;
      b = 255;
      g = 255;
    }
  }
  stroke(0);
   fill(0,0,0);
  rect(10, 225, 20, 20);

  if(mouseIsPressed){
    if(mouseX>10 && mouseX<30 && mouseY>225 && mouseY <245){
      r = 0;
      b = 0;
      g = 0;
    }
  }

  //otherfunctions
  stroke(0);
  fill(255);
  rect(35, 225, 20, 20);
  line(45, 225, 45, 245);
  if(mouseIsPressed){
    if(mouseX>35 && mouseX<125 && mouseY>225 && mouseY <245){
      weight = 1;
      style=0;
    }
  }
  stroke(0);
  fill(255);
  rect(60, 225, 20, 20);
  rect(69, 225, 2, 20);
  if(mouseIsPressed){
    if(mouseX>60 && mouseX<80 && mouseY>225 && mouseY <245){
      weight = 3;
      style = 0;
    }
  }

  stroke(0);
  fill(255);
  rect(85, 225, 20, 20);
  line(85, 225, 105, 245);
  line(105, 225, 85, 245);
  if(mouseIsPressed){
    if(mouseX>85 && mouseX<105 && mouseY>225 && mouseY <245){
      background(255);

    }
  }



}

function keyPressed() {
  if(key == 's'){
  save("image.jpg");
}
}
