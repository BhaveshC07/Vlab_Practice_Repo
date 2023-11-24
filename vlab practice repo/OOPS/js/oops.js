class Polygon {
    constructor(l, n, canvas, x, y, id, name) {
        this.movable = true;
        this._l = l;
        this._n = n;
        this._canvas = canvas;
        this._x = x;
        this._y = y;
        this._name = name;
        this._id = id;
    }
    display() {
        console.log("name=" + this._name);
        console.log("l=" + this._l);
        console.log("n=" + this._n);
        console.log("x=" + this._x);
        console.log("y=" + this._y);
        console.log("id=" + this._id);
    }
    set x(x) {
        if (this.movable && x > 0) {
            this._x = x;
        }
        else {
            console.log("check it is movable or x is positive");
        }
    }
    get x() {
        return (this._x);
    }
}
//# sourceMappingURL=oops.js.map