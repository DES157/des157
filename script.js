//p5 file
//Michelle Quach, Winter 2018
//interactive banner for studio 0, Portal

//open console window to print message
console.log("this is mysketch.js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    //has to parent to an id
    myCanvas.parent('mySketch');
    background("#efefef");
    stroke(255);
    strokeWeight(1);
}

function draw() {
    // add statements here

    //changes background and ellipse color with mouse clicks
    if (mouseIsPressed) {
        background("#efefef");
        fill("#f9ce64");

    } else {
        background("#f9ce64");
        fill(255);
    }
    //creates a grid
    for (var i = 0; i < 100; i = i + 1) {
        line(i * 50, 0, i * 50, 250);
    }

    for (var i = 0; i < 100; i = i + 1) {
        line(0, i * 50, 800, i * 50);
    }

    //draws a sin wave based on mouseover
    for (var x = 0; x < 800; x += 5) {

        var t = (TWO_PI / 800) * x;
        var A = mouseY;
        var f = mouseX / 100;

        var y = A * sin(t * f);
        noStroke();
        ellipse(x, y + 125, 10, 10);
    }
}
