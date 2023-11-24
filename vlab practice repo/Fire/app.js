var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 0, 20); //canvas,context,startx,starty,no of particles;
// default setting.one can customize
// smoke.radiusmax=15;
// smoke.radiusmin=3;
// smoke.vxrange=1;
// smoke.vymax=5;
// smoke.vxmin=1;
smoke.color = 'red';
runsmoke();
function runsmoke() {
    smoke.start();
    //requestAnimationFrame
    window.requestAnimationFrame(runsmoke);
}
//# sourceMappingURL=app.js.map