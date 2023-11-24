var i: number;
var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var container: { circle: Geometry.particle }[] = [];
var animate = true;

for (i = 0; i < 3000; i++) {
    var particle = new Geometry.particle(context);
    particle.vx = Math.random() * 4 + 1;
    container.push({ circle: particle });
}
anim();
function anim() {
    // context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.save();
    context.beginPath();
    context.rect(0, 40, 1600, 400);
    context.fillStyle = "rgba(0,0,0,0.3)";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.restore();
    for (i = 0; i < 3000; i++) {
        container[i].circle.draw();
    }
    if (animate) {
        window.requestAnimationFrame(anim);
    }
}
function Stop() {
    animate = false;
}
function Start() {
    animate = true;
    anim();
}


