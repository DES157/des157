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
 colors[1] = color(#F0DDB2);
 colors[2] = color(#DFB3C0);
 colors[3] = color(#C4A4CC);
 
  stroke(colors[var(random(colors.length))]);
  strokeWeight(2);
  ellipse(k,j,p,p);
  line(k,j,touchX,touchY);
  
//circle color changes based on mouse   
  
 if (touchX <=200){
   strokeWeight(10);
   stroke(#F0DDB2);
   noFill();
   ellipse(k,j,p,p);
   

   
 } else if ((touchX >200)&&(touchX <400)){
   strokeWeight(10);
   stroke(#DFB3C0);
   noFill();
   ellipse(k,j,p,p);
  
  
 } else if ((touchX >400)&&(touchX <600)){
   strokeWeight(10);
   stroke(255);
   noFill();
   ellipse(k,j,p,p);
  
   
 } else{
   strokeWeight(10);
   stroke(#C4A4CC);
   noFill();
   ellipse(k,j,p,p);
  

 }
    
}
 
 