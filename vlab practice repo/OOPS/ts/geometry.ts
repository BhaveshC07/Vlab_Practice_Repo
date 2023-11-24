class Geometry{
    x:number;
    y:number;
    points:{x:number,y:number}[]=[];
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;

    }
    protected calculate(){

    }
    draw(){
        for(let i=0;i<this.points.length;i++){
            console.log(this.points[i]);
        }
    }
}

class Triangle extends Geometry{
    constructor(x:number,y:number){
        super(x,y);
    }
    set_points(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number){
        this.points.push({x:x1,y:y1});
        this.points.push({x:x2,y:y2});
        this.points.push({x:x3,y:y3});
    }
    draw(): void {
        console.log("I am a triangle");
        super.draw();

    }
}

class Equi_triangle extends Triangle{
    l:number;
    constructor(x:number,y:number,l:number){
        super(x,y);
        this.l=l;
    }
    protected calculate(): void {
        this.points.push({x:this.x,y:this.y});
        this.points.push({x:this.x+this.l,y:this.y});
        let h=this.l*Math.sin(60*Math.PI/180);
        this.points.push({x:this.x+this.l/2,y:this.y+h});
    }
    draw(): void {
        this.calculate();
        super.draw();
        }
}

class Quadrilateral extends Geometry{
    constructor(x:number,y:number){
        super(x,y);
    }
    set_points(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number,x4:number,y4:number){
        this.points.push({x:x1,y:y1});
        this.points.push({x:x2,y:y2});
        this.points.push({x:x3,y:y3});
        this.points.push({x:x4,y:y4});
    }
    draw(): void {
        console.log("I am a quadrilateral");
        super.draw();

    }
}

class Rectangle extends Quadrilateral{
    l:number;
    w:number;
    constructor(x:number,y:number,l:number,w:number){
        super(x,y);
        this.l=l;
        this.w=w;
    
    }
    protected calculate(): void {
        this.points.push({x:this.x,y:this.y});
        this.points.push({x:this.x+this.l,y:this.y});
        this.points.push({x:this.x+this.l,y:this.y+this.w});
        this.points.push({x:this.x,y:this.y+this.w});

    }
    draw(): void {
        this.calculate();
        super.draw();
        }

}
class Square extends Rectangle{
    constructor(x:number,y:number,l:number){
        super(x,y,l,l);
    }
}