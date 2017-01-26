var colorIndex;
var colors;

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    colors = [color('#DCFEFF'), color('#DCFEFF'), color('#DCFEFF'), color('#4786A2')];
    frameRate(6);
}



function draw() {
    noFill();
    stroke(255);
    var k = 400;
    var j = 125;
    var p = 100;
    var q = random(300, 500);

    //lines color ranges array
    colorIndex = int(random(colors.length - 1));

    console.log('colorIndex: ' + colorIndex);

    stroke(255);
    strokeWeight(60);
    ellipse(k, j, p, p);
    stroke(colors[colorIndex]);
    line(k, j, touchX, touchY);


    //circle color changes based on mouse
    //lines below
    if (touchX <= 200) {
        strokeWeight(40);
        stroke('#4391AF');
        noFill();
        ellipse(k, j, p, p);



    } else if ((touchX > 200) && (touchX < 400)) {
        strokeCap(PROJECT);
        strokeWeight(80);
        stroke('#52BDE7');
        noFill();
        ellipse(k, j, p, p);


    } else if ((touchX > 400) && (touchX < 600)) {
        strokeCap(PROJECT);
        strokeWeight(30);
        stroke(255);
        noFill();
        ellipse(k, j, p, p);


    } else {
        strokeCap(PROJECT);
        strokeWeight(50);
        stroke('#4786A2');
        noFill();
        ellipse(k, j, p, p);


    }


}
