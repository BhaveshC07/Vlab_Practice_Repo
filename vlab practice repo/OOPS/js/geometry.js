class Geometry {
    constructor(x, y) {
        this.points = [];
        this.x = x;
        this.y = y;
    }
    calculate() {
    }
    draw() {
        for (let i = 0; i < this.points.length; i++) {
            console.log(this.points[i]);
        }
    }
}
class Triangle extends Geometry {
    constructor(x, y) {
        super(x, y);
    }
    set_points(x1, y1, x2, y2, x3, y3) {
        this.points.push({ x: x1, y: y1 });
        this.points.push({ x: x2, y: y2 });
        this.points.push({ x: x3, y: y3 });
    }
    draw() {
        console.log("I am a triangle");
        super.draw();
    }
}
class Equi_triangle extends Triangle {
    constructor(x, y, l) {
        super(x, y);
        this.l = l;
    }
    calculate() {
        this.points.push({ x: this.x, y: this.y });
        this.points.push({ x: this.x + this.l, y: this.y });
        let h = this.l * Math.sin(60 * Math.PI / 180);
        this.points.push({ x: this.x + this.l / 2, y: this.y + h });
    }
    draw() {
        this.calculate();
        super.draw();
    }
}
class Quadrilateral extends Geometry {
    constructor(x, y) {
        super(x, y);
    }
    set_points(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.points.push({ x: x1, y: y1 });
        this.points.push({ x: x2, y: y2 });
        this.points.push({ x: x3, y: y3 });
        this.points.push({ x: x4, y: y4 });
    }
    draw() {
        console.log("I am a quadrilateral");
        super.draw();
    }
}
class Rectangle extends Quadrilateral {
    constructor(x, y, l, w) {
        super(x, y);
        this.l = l;
        this.w = w;
    }
    calculate() {
        this.points.push({ x: this.x, y: this.y });
        this.points.push({ x: this.x + this.l, y: this.y });
        this.points.push({ x: this.x + this.l, y: this.y + this.w });
        this.points.push({ x: this.x, y: this.y + this.w });
    }
    draw() {
        this.calculate();
        super.draw();
    }
}
class Square extends Rectangle {
    constructor(x, y, l) {
        super(x, y, l, l);
    }
}
//# sourceMappingURL=geometry.js.map