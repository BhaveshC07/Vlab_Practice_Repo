const div_dashboard = document.getElementById("dashboard");
const div_panel = document.getElementById("panel");
function activity() {
    var stpt = new Chemistry.Point(400, 400);
    var mycircle = new Chemistry.Circle(stpt, 50, canvas);
    scene.add(mycircle);
    var stpt = new Chemistry.Point(600, 200);
    var ellipse = new Chemistry.Ellipse(stpt, 150, 90, canvas);
    scene.add(ellipse);
    var stpt = new Chemistry.Point(700, 400);
    var sqr = new Chemistry.Polygon(stpt, 100, 4, canvas);
    sqr.stang = 45;
    scene.add(sqr);
    //var mysquare=new Chemistry.Square(stpt,200,canvas);
    //scene.add(mysquare);
}
function dashboard() {
    div_dashboard.style.left = `${canvas.width - 185}px`;
    div_dashboard.style.top = `${rect.y + 10}px`;
    // div_panel.style.left=`${canvas.width-185}px`
    //div_panel.style.top=`${rect.y+35}px`
    //div_panel.style.width="180px";
}
function dashboard_button() {
    div_dashboard.innerHTML = `<input type"button" value="square" onclick="square_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="flask" onclick="flask_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="pentagon" onclick="pentagon_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="change color" onclick="change_color_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="drag" onclick="drag_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="L-Bracket" onclick="bracket_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="circle" onclick="circle_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="ellipse" onclick="ellipse_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="set value" onclick="change_value_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="set connection" onclick="connect_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="move flask" onclick="move_flask_x();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="move square" onclick="move_square_x();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="move pentagon" onclick="move_pentagon_x();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="move lbracket" onclick="move_lbracket_x();" style="width:60px">`;
    // div_dashboard.innerHTML+=`<input type"button" value="move circle" onclick="move_circle_x();" style="width:60px">`;
    // div_dashboard.innerHTML+=`<input type"button" value="move ellipse" onclick="move_ellipse_x();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="rotate " onclick="rotate_polygon();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="tank " onclick="tank_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type"button" value="move" onclick="move_click();" style="width:60px">`;
}
function show_polygon_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">Start pt</p>
                        <input type="text" id="stptx" style="width:45px">
                        <input type="text" id="stpty" style="width:45px">
                        <p style="width:100px;display: inline-block">No of Side:</p>
                        <input type="text" id="n" style="width:50px">
                        <p style="width:100px;display: inline-block">length: </p>
                        <input type="text" id="l" style="width:50px">
                        <p style="width:100px;display: inline-block">Name:</p>
                        <input type="text" id="name" style="width:50px">
                        <p style="width: 100px;display: inline-block">Start angle:</p>
                        <input type="text" id="stang" style="width:50px">
                        <input type="button" value="Draw" onclick="draw_polygon();" style="width:60px">
                        <input type="button" value="Area" onclick="area_geometry();" style="width:60px">
                        <br><p style="width:45px;display: inline-block">Area</p>
                        <input type="text" id="area" style="width: 100px">`;
}
function draw_polygon() {
    var stptx = document.getElementById("stptx");
    var stpty = document.getElementById("stpty");
    var l = document.getElementById("l");
    var n = document.getElementById("n");
    var name = document.getElementById("name");
    var stang = document.getElementById("stang");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var sqr = new Chemistry.Polygon(stpt, parseInt(l.value), parseInt(n.value), canvas);
    sqr.name = name.value;
    sqr.stang = parseInt(stang.value);
    scene.add(sqr);
}
function area_geometry() {
    var name = document.getElementById("name");
    var area = document.getElementById("area");
    area.value = `${scene.area(name.value)}`;
}
function show_ellipse_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">Start pt</p>
                        <input type="text" id="stptx" style="width:45px">
                        <input type="text" id="stpty" style="width:45px">
                        <p style="width:100px;display: inline-block">a: </p>
                        <input type="text" id="a" style="width:50px">
                        <p style="width:100px;display: inline-block">b: </p>
                        <input type="text" id="b" style="width:50px">
                        <p style="width:100px;display: inline-block">Name:</p>
                        <input type="text" id="name" style="width:50px">
                        <input type="button" value="Draw" onclick="draw_ellipse();" style="width:60px">
                        <input type="button" value="Area" onclick="area_geometry();" style="width:60px">
                        <br><p style="width:45px;display: inline-block">Area</p>
                        <input type="text" id="area" style="width: 100px">`;
}
function draw_ellipse() {
    var stptx = document.getElementById("stptx");
    var stpty = document.getElementById("stpty");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var name = document.getElementById("name");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var ellipse = new Chemistry.Ellipse(stpt, parseInt(a.value), parseInt(b.value), canvas);
    ellipse.name = name.value;
    scene.add(ellipse);
}
function show_circle_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">Start pt</p>
                        <input type="text" id="stptx" style="width:45px">
                        <input type="text" id="stpty" style="width:45px">
                        
                        <p style="width:100px;display: inline-block">radius: </p>
                        <input type="text" id="radius" style="width:50px">
                        <p style="width:100px;display: inline-block">Name:</p>
                        <input type="text" id="name" style="width:50px">
                        <input type="button" value="Draw" onclick="draw_circle();" style="width:60px">
                       
                        <br><p style="width:45px;display: inline-block">Area</p>
                        <input type="text" id="area" style="width: 100px">`;
}
function draw_circle() {
    var stptx = document.getElementById("stptx");
    var stpty = document.getElementById("stpty");
    var radius = document.getElementById("radius");
    var name = document.getElementById("name");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var circle = new Chemistry.Circle(stpt, parseInt(radius.value), canvas);
    circle.name = name.value;
    scene.add(circle);
}
var img = new Image();
img.src = "./images/flask.jpg";
function test_mapping() {
    context.fillStyle = "green";
    context.fillRect(50, 50, 100, 50);
    context.save();
    context.translate(200, 200);
    context.rotate(45 * Math.PI / 100);
    context.fillRect(50, 50, 100, 50);
    context.restore();
}
function test_tranformation() {
    context.fillStyle = "green";
    context.fillRect(200, 200, 100, 50);
    context.save();
    context.translate(200, 200);
    context.rotate(45 * Math.PI / 100);
    context.translate(-200, -200);
    context.fillRect(200, 200, 100, 50);
    context.restore();
}
function draw_square(x, y) {
    let square = new Chemistry.Polygon(new Chemistry.Point(x, y), 100, 4, canvas);
    square.name = "square";
    scene.add(square);
}
function draw_bracket(x, y) {
    let square = new Chemistry.L_bracket(new Chemistry.Point(x, y), canvas);
    square.name = "bracket";
    scene.add(square);
}
function draw_Circle(x, y) {
    let square = new Chemistry.Circle(new Chemistry.Point(x, y), 50, canvas);
    scene.add(square);
}
function draw_Ellipse(x, y) {
    let square = new Chemistry.Ellipse(new Chemistry.Point(x, y), 200, 100, canvas);
    scene.add(square);
}
function draw_flask(x, y) {
    let flask = new Chemistry.Flask(img, new Chemistry.Point(x, y), canvas);
    flask.name = "flask";
    scene.add(flask);
}
function draw_pentagon(x, y) {
    let square = new Chemistry.Polygon(new Chemistry.Point(x, y), 100, 5, canvas);
    square.name = "pentagon";
    scene.add(square);
}
function change_value(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            scene.container[i].geo.change_value();
            scene.draw();
            break;
        }
    }
}
function draw_tank(x, y) {
    let tank = new Chemistry.tank(new Chemistry.Point(x, y), 200, 100, canvas);
    tank.name = "tank";
    scene.add(tank);
    tank.fill_anim = true;
    redraw_scene();
}
let storei = -1;
let start1 = 0;
function set_connection(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            if (start1 == 0) {
                storei = i;
                start1 = 1;
                console.log(i);
            }
            else if (start1 == 1) {
                scene.container[storei].geo.set_connection(scene.container[i].geo);
                start1 = 0;
                storei = -1;
                console.log(i);
            }
            scene.draw();
            break;
        }
    }
}
function change_color(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            scene.container[i].geo.color = "red";
            scene.draw();
            break;
        }
    }
}
var anim = false;
var timer1;
function deferred_frame() {
    anim = true;
    redraw_scene();
    clearInterval(timer1);
}
function move_geo(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            scene.container[i].geo.move_x = true;
            break;
        }
    }
    redraw_scene();
}
function move_flask_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "flask") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function move_square_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "square") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function move_pentagon_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "pentagon") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function move_lbracket_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "bracket") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function move_ellipse_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "ellipse") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function fill_tank() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "tank") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function move_circle_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "circle") {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function rotate_polygon() {
    for (let i = 0; i < scene.container.length; i++) {
        scene.container[i].geo.revolve = true;
    }
    anim = false;
    timer1 = setInterval(deferred_frame, 100);
}
function drag_geo(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y)) && scene.container[i].geo.draggable) {
            scene.container[i].geo.stpt = new Chemistry.Point(x, y);
            // assemble(scene.container[i].geo);
            scene.draw();
            break;
        }
    }
}
function assemble(obj) {
    for (let i = 0; i < scene1.container.length; i++) {
        if (scene1.container[i].geo.isinside(new Chemistry.Point(obj.stpt.x, obj.stpt.y)) && scene1.container[i].geo.name == obj.name) {
            obj.stpt = scene1.container[i].geo.stpt;
            obj.lock();
            break;
        }
    }
}
var geo;
function square_click() {
    geo = "square";
}
function flask_click() {
    geo = "flask";
}
function pentagon_click() {
    geo = "pentagon";
}
function change_color_click() {
    geo = "color";
}
function drag_click() {
    geo = "drag";
}
function bracket_click() {
    geo = "bracket";
}
function tank_click() {
    geo = "tank";
}
function change_value_click() {
    geo = "change_value";
}
function circle_click() {
    geo = "circle";
}
function connect_click() {
    geo = "connect";
}
function move_click() {
    geo = "Move";
}
function ellipse_click() {
    geo = "ellipse";
}
function redraw_scene() {
    scene.draw();
    if (anim == true) {
        window.requestAnimationFrame(redraw_scene);
    }
}
//# sourceMappingURL=activity1.js.map