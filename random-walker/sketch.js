var x;
var y;

function setup() {
    createCanvas(400, 400);
    x = 200;
    y = 200;
    background(0);
}

function draw() {
    stroke(floor(random(255)), floor(random(255)), floor(random(255)), floor(random(255)));
    strokeWeight(10);
    point(x, y);

    var step = random(1, 5);
    var r = floor(random(4));

    switch (r) {
        case 0:
            x += step;
            break;
        case 1:
            x -= step;
            break;
        case 2:
            y += step;
            break;
        case 3:
            y -= step;
            break;
    }
}