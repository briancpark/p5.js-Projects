class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        this.acc = p5.Vector.random2D();
        this.acc.setMag(0.01);
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(1);

        //this.acc = p5.Vector.random2D();
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        //this.vel.limit(2);
    }

    show() {
        //stroke(floor(random(255)), floor(random(255)), floor(random(255)), floor(random(255)));
        stroke(255);
        strokeWeight(2);
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, 32)
        //point(this.pos.x, this.pos.y);
    }
}