// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");


var img;
function preload() {
  img = loadImage("banner_icons_1.png");
}
function setup() {
  image(img, 0, 0);
}
