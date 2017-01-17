// Interactive sketchpad header for DES 157 portal.

var colorValue = 0;
var strokeValue = 0;

function setup() {
	var myCanvas = createCanvas(800, 250);
	myCanvas.parent('mySketch');
	background(255);
	rect(0, 0, 799, 249); // Border around canvas
}

function draw() {
	  stroke(0);
	  strokeWeight(1);
	  
	  // Left side options (Clear, Thin Stroke, Thick Stroke)
	  fill(255);
	  rect(10, 10, 20, 20);
	  line(10, 10, 30, 30);
	  line(10, 30, 30, 10);
	  
	  rect(10, 30, 20, 20);
	  line(10, 40, 30, 40);
	  
	  rect(10, 50, 20, 20);
	  strokeWeight(4);
	  line(10, 60, 30, 60);
	  strokeWeight(1);
	  
	  // Right side options (Colors)
	  fill(0); // Black
	  rect(770, 10, 20, 20);
	  fill(255); // White
	  rect(770, 30, 20, 20);
	  fill(96, 206, 203); // Blue
	  rect(770, 50, 20, 20);
	  fill(90, 227, 46); // Green
	  rect(770, 70, 20, 20);
	  fill(240, 234, 44); // Yellow
	  rect(770, 90, 20, 20);
	  fill(234, 104, 99); // Pink
	  rect(770, 110, 20, 20);
	  
	  if (mouseIsPressed)
	  {
	  	// Changes color to corresponding rectangle (above)
	    if (colorValue == 0)
	    {
	      stroke(0);
	    } else if (colorValue == 1)
	    {
	      stroke(255);
	    } else if (colorValue == 2)
	    {
	      stroke(96, 206, 203);
	    } else if (colorValue == 3)
	    { 
	      stroke(90, 227, 46);
	    } else if (colorValue == 4)
	    {
	      stroke(240, 234, 44);
	    } else if (colorValue == 5)  
	    {
	      stroke(234, 104, 99);
	    }
	    
	    // Changes between stroke widths
	    if (strokeValue == 0)
	    {
	      strokeWeight(1);
	    } else if (strokeValue == 1)
	    {
	      strokeWeight(4);
	    }
	    
	    // Draws line at current mouse location 
	  	line(pmouseX, pmouseY, mouseX, mouseY);
	  }
}

function mouseClicked() {
  // If mouse is clicked within a square, that action (clear/stroke/color change) will occur
  if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 30)
  {
    stroke(0);
    rect(0, 0, 799, 249); // Clear
  }
  
  if (mouseX > 10 && mouseX < 30 && mouseY > 30 && mouseY < 50)
  {
    strokeValue = 0; // Thin stroke weight
  } 
  
  if (mouseX > 10 && mouseX < 30 && mouseY > 50 && mouseY < 70)
  {
    strokeValue = 1; // Thick stroke weight
  }

  if (mouseX > 770 && mouseX < 790 && mouseY > 10 && mouseY < 30)
  {
    colorValue = 0; // Black
  }
  
  if (mouseX > 770 && mouseX < 790 && mouseY > 30 && mouseY < 50)
  {
    colorValue = 1; // White
  }
  
  if (mouseX > 770 && mouseX < 790 && mouseY > 50 && mouseY < 70)
  {
    colorValue = 2; // Blue
  }
  
  if (mouseX > 770 && mouseX < 790 && mouseY > 70 && mouseY < 90)
  {
    colorValue = 3; // Green
  }
  
  if (mouseX > 770 && mouseX < 790 && mouseY > 90 && mouseY < 110)
  {
    colorValue = 4; // Yellow
  }
  
  if (mouseX > 770 && mouseX < 790 && mouseY > 110 && mouseY < 130)
  {
    colorValue = 5; // Pink
  }
}