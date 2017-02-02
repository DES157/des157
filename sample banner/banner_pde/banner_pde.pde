// banner template
// ellipse follow cursor and change color on press

void setup(){
  size(800,250);
  background(255);
}

void draw(){
  ellipse(mouseX, mouseY, 50, 50);
  // if the mouse is pressed, change color
  if (mousePressed){
    fill(0);
  }else {
    fill(255);
  }
}