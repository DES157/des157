function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent ('mySketch');  
}

function draw() {
  noFill();
  stroke(255);
  var k= 400;
  var j= 125;
  var p= 100;
  var q= random(300,500);
  color[] colors = new color[4];
//lines color ranges array
 colors[0] = color(255);
 colors[1] = color('#4391AF');
 colors[2] = color('#52BDE7');
 colors[3] = color('#4786A2');
 
  stroke(colors[var(random(colors.length))]);
  strokeWeight(2);
  strokeCap(ROUND);
  ellipse(k,j,p,p);
  line(k,j,touchX,touchY);
  
//circle color changes based on mouse   
  
 if (touchX <=200){
   strokeWeight(10);
   stroke('#4391AF');
   noFill();
   ellipse(k,j,p,p);
   

   
 } else if ((touchX >200)&&(touchX <400)){
   strokeWeight(10);
   stroke('#52BDE7');
   noFill();
   ellipse(k,j,p,p);
  
  
 } else if ((touchX >400)&&(touchX <600)){
   strokeWeight(10);
   stroke(255);
   noFill();
   ellipse(k,j,p,p);
  
   
 } else{
   strokeWeight(10);
   stroke('#4786A2');
   noFill();
   ellipse(k,j,p,p);
  

 }
    
}
 
 