// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");


var bg;
function setup() {
  bg = loadImage("banner.png");
  createCanvas(800, 250);
}
    
function draw() {
  background(bg);
}
    
    
  // here we use a callback to display the image after loading
  /*createCanvas(800, 250);
  background(255);
  loadImage("banner_icons_1.png", function(img) {
    image(img, 0, 0);
  });
}

function draw(){
    image(img, 0,0);
}*/