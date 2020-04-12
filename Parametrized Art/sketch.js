var t = 0;
const NUM_LINES = 10;

function x1(t) {
    return sin(t / 10) * 100 + sin(t / 5) * 20;
}

function y1(t) {
    return cos(t / 10) * 100;
}

function x2(t) {
    return sin(t / 10) * 200 + sin(t) * 2;
}

function y2(t) {
    return cos(t / 20) * 200 + cos(t / 12) * 20;
}

function setup() {
    createCanvas(500, 500);
    background(0);
}

var x_value;
var y_value;


function draw() {
    background(0)
    stroke(255);
    strokeWeight(5);

    translate(width / 2, height / 2);

    for (var i = 0; i < NUM_LINES; i++) {
        line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
    }

    line(x1(t), y1(t), x2(t), y2(t))
    t += 0.5;
}