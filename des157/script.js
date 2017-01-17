  var colorIndex;
  var colors;
 
 function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent ('mySketch');  
  colors = [color('#fff'), color('#4391AF'), color('#52BDE7'), color('#4786A2')];
 
}



function draw() {
  noFill();
  stroke(255);
  var k= 400;
  var j= 125;
  var p= 100;
  var q= random(300,500);
 
//lines color ranges array
 colorIndex=int(random(colors.length-1));

console.log('colorIndex: ' + colorIndex);
 
stroke(255);
  strokeWeight(2);
  ellipse(k,j,p,p);
    stroke(colors[colorIndex]);
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
 
 