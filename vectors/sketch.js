let walker;

function setup() {
    createCanvas(400, 400);
    walker = new Walker(200, 200);

}

function draw() {
    background(0);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        walker.applyForce(wind);
    }

    let gravity = createVector(0, 0.2);
    walker.applyForce(gravity);

    walker.update();
    walker.edges();
    walker.show();
}