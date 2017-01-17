PImage img;
int x = 0;

void setup() {
  size(800, 250);

  img = loadImage("../images/ex3_1.tiff");
}

void draw () {
  background(255);

  translate(width/2, height/2);
  rotate(radians(0+x));

  imageMode(CENTER);
  //img.resize(1000,0);
  image(img, 0, 0);
  
  //rectMode(CENTER);
  //rect(0, 0, 52, 52);
}

void mouseReleased() {
  if (mouseButton == LEFT) {
    x+=10*PI;
  } else {
    x-=10*PI;
  }
}