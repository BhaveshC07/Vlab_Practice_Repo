namespace Chemistry{//namespace is used to group the classes further so there may not be conflict between  class having same name 

    export class Point{ //export keyword allows us to use class inside the namespace
        x:number;
        y:number;
        constructor(x:number,y:number){
            this.x=x;
            this.y=y;
        }
    }
     export class Geometry{
        name:string;
        color:string;
        private _stpt:Point;
        private _dragable:boolean=true;
        value:number;
        move_x:boolean=false;
        revolve:boolean=false;
        fill_anim:boolean=false;
        constructor(){}
        set stpt(pt:Point){
            if(this._dragable){
                this._stpt=pt;
            }
        }
        get stpt(){
            return(this._stpt);
        }
        get draggable():boolean{
            return(this._dragable);
        }
        draw(){}
        protected calculate(){}//should not be access outside
        get area():number{
            return(0);
        }
        isinside(point:Point):boolean{
            let dx=(this._stpt.x-point.x)*lscale;
            let dy=(this._stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy,0.5);
            if(r<50){
                return(true);
            }
            else{
                return(false);
            }
        }
        lock(){
            this._dragable=false;
        }
        protected triangle_area(pt1:Point,pt2:Point,pt3:Point):number{
            return(0);
        }
        change_value(){}
        set_connection(geo:Geometry){}
        protected random(max:number,min:number):number{
            return(Math.random()*(max-min)+min);
        }
       
    }
    
    export class Circle extends Geometry{
       // stpt:Point;
        radius:number;
        vx:number;
        canvas:HTMLCanvasElement;//paper to draw our geometry
        context:CanvasRenderingContext2D;//context is like a pen rendering on canvas
        value:number=0;
        color:string="red";
        objectconnected:Geometry;
        connected:boolean=false;
        constructor(stpt:Point,radius:number,canvas:HTMLCanvasElement){
            super();//calling base class
            this.stpt=stpt;
            this.radius=radius;
            this.canvas=canvas;
            this.context=this.canvas.getContext('2d');
            this.vx=this.random(5,1);
        }
        draw(): void {
            if(this.move_x){
                this.motion_x();
            }
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.lineWidth=1;
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
           
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy,0.5);
            if(r<this.radius){
                return(true);
            }
            else{
                return(false);
            }
        }
        change_value(){
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }
        set_connection(geo:Geometry){
            this.objectconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objectconnected.stpt.x*lscale,this.objectconnected.stpt.y*lscale);
            this.context.stroke();
            this.objectconnected.color=this.color;
            this.objectconnected.value=this.value;

        }
        protected motion_x(){
            // this.stpt.x++;
            this.stpt.x+=this.vx;
             this.motion_x_check();
         }   
         protected motion_x_check(){
             if(this.stpt.x>1800){
                // this.move_x=false;
                this.stpt.x=50;
             }
         }
       
       
    }
    
    export class Ellipse extends Geometry{
       // stpt:Point;
        points:Point[]=[];
        a:number;
        b:number;
        vx:number;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        constructor(stpt:Point,major_length:number,minor_length:number,canvas:HTMLCanvasElement){
            super();
            this.stpt=stpt;
            this.a=major_length / 2;
            this.b=minor_length / 2;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.points=[];
            this.vx=this.random(5,1);

        }

        protected calculate(): void {
            this.points=[];
                for(let ang=0;ang<360;ang++ ){ 
                    let ang1 =ang*Math.PI/180;
                let x = this.stpt.x*lscale+this.a*lscale*Math.cos(ang1);
                let y = this.stpt.y*lscale+this.b*lscale*Math.sin(ang1);
                this.points.push(new Point(x,y));}
            
                    }
            
        draw(): void {
            if(this.move_x){
                this.motion_x();
            }
            this.calculate();
            this.context.beginPath();
            this.context.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
                this.context.lineTo(this.points[i].x,this.points[i].y)
            }
            this.context.lineWidth=1;
            this.context.fillStyle="blue";
            this.context.closePath();
            this.context.fill();
            this.context.stroke();
            
        }
       
        get area():number{
            let a=0;
            for(let i=0;i<this.points.length-1;i++){
                a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
                
            }
            a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
            
            a=a/2;
            return(Math.abs(a));
        }
        protected motion_x(){
            this.stpt.x+=this.vx;
            this.motion_x_check();
        }   
        protected motion_x_check(){
            if(this.stpt.x>1800){
               // this.move_x=false;
               this.stpt.x=50;
            }
        }

    }
    
    export class Polygon extends Geometry{
       // stpt:Point;  


       
        points:Point[]=[];
        l:number;
        n:number;
         vx:number;
        stang:number=0;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        color:string="blue";
        constructor(stpt:Point,l:number,n:number,canvas:HTMLCanvasElement){
            super();
            this.stpt=stpt;
            this.l=l;
            this.n=n;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.points=[];
           this.vx=this.random(5,1);

        }

        protected calculate(): void {
            this.points=[];
            let angbet=360.0/this.n;
            let ang=this.stang;
            for(let i=0;i<this.n;i++){
                let ang1=ang*Math.PI/180;
                let x=this.stpt.x*lscale+this.l*lscale*Math.cos(ang1);
                let y=this.stpt.y*lscale+this.l*lscale*Math.sin(ang1);
                this.points.push(new Point(x,y));
                ang+=angbet;
            }
            
        }
        protected rotate(){
            this.stang++;
            this.rotate_check();
        }
        protected  rotate_check(){
            if(this.stang>=360){
                this.stang=0;
            }
        }

        draw(): void {
            if(this.revolve){
                this.rotate();
            }
             if(this.move_x){
                this.motion_x();
            }
            this.calculate();
            this.context.beginPath();
            this.context.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
                this.context.lineTo(this.points[i].x,this.points[i].y)
            }
            this.context.lineWidth=1;
            this.context.fillStyle=this.color;
            this.context.closePath();
            this.context.fill();
            this.context.stroke();
        }
        get area():number{
            let a=0;
            for(let i=0;i<this.points.length-1;i++){
                a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
                
            }
            a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
            
            a=a/2;
            return(a);
        }
        isinside(point:Point):boolean{
            point.x=point.x*lscale;
            point.y=point.y*lscale;
            let a=0;
            for(let i=0;i<this.points.length-1;i++){
                a+=this.triangle_area(point,this.points[i],this.points[i+1])   
            }
           a+=this.triangle_area(point,this.points[this.points.length-1],this.points[0]);
           if(Math.abs(this.area-a)<0.000001){
            return(true);
           }
           else{
            return(false);
           }
            
           
        }
        protected triangle_area(pt1:Point,pt2:Point,pt3:Point):number{
           
            let a=0;
            a+=pt1.x*pt2.y-pt2.x*pt1.y;
            a+=pt2.x*pt3.y-pt3.x*pt2.y;
            a+=pt3.x*pt1.y-pt1.x*pt3.y;
            return(Math.abs(a/2));
        }
         protected motion_x(){
           // this.stpt.x++;
           this.stpt.x+=this.vx;
            this.motion_x_check();
        }   
        protected motion_x_check(){
            if(this.stpt.x>1800){
               // this.move_x=false;
               this.stpt.x=50;
            }
        }
     }

     export class L_bracket extends Geometry{
        points:Point[]=[];
       // stpt:Point;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        path:Path2D;
        vx:number;
        constructor(stpt:Point,canvas:HTMLCanvasElement){
            super();
            this.stpt=stpt;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.vx=this.random(5,1);
        }
        protected calculate(): void {
            this.points=[];
            this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));
            this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20+100)*lscale));
            this.points.push(new Point((this.stpt.x-20+40)*lscale,(this.stpt.y-20+100)*lscale));
            this.points.push(new Point((this.stpt.x-20+40)*lscale,(this.stpt.y-20+40)*lscale));
            this.points.push(new Point((this.stpt.x-20+100)*lscale,(this.stpt.y-20+40)*lscale));
            this.points.push(new Point((this.stpt.x-20+100)*lscale,(this.stpt.y-20)*lscale));
            this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));

        }
        draw(): void {
            if(this.move_x){
                this.motion_x();
            }
            this.calculate();
            this.path=new Path2D();
            this.path.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
                this.path.lineTo(this.points[i].x,this.points[i].y)
            }
            this.context.beginPath();
            this.context.strokeStyle="black";
            this.context.fillStyle="red";
            this.context.fill(this.path);
            this.context.stroke(this.path);
            
        }
        isinside(point: Point): boolean {
            point.x=point.x*lscale;
            point.y=point.y*lscale;
            this.context.save();
            this.context.translate(0,this.canvas.height);
            this.context.scale(1,-1);
            if(this.context.isPointInPath(this.path,point.x,point.y)){
                this.context.restore();
                return(true);
            }
            else{
                this.context.restore();
                return(false);
            }
        }
        protected motion_x(){
            this.stpt.x+=this.vx;
            this.motion_x_check();
        }   
        protected motion_x_check(){
            if(this.stpt.x>1800){
               // this.move_x=false;
               this.stpt.x=50;
            }
        }
        
     }
     export class Flask extends Geometry{
        img:CanvasImageSource;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        dx=225;
        vx:number;
        dy=190;
        stang:number=0;
        
       // stpt:Point;
        constructor(image:CanvasImageSource,stpt:Point,canvas:HTMLCanvasElement){
            super();
            this.img=image;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.stpt=stpt;
            this.vx=this.random(5,1);
            
        }
        draw(): void {
            if(this.move_x){
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.scale(1,-1);
            if(this.revolve){
                this.rotate();
            }
            this.context.drawImage(this.img,-this.dx/2*lscale,-this.dy/2*lscale,this.dx*lscale,this.dy*lscale);
            this.context.restore();
        }
        protected rotate(){
            this.stang--;
            this.context.rotate(this.stang*Math.PI/180);
        }
        protected rotate_check(){
            if(this.stang<=-360){
                this.stang=0;
            }
        }
        isinside(point: Point): boolean {
            point.x=point.x*lscale;
            point.y=point.y*lscale;
            if(point.x> this.stpt.x*lscale-this.dx/2*lscale && point.x< this.stpt.x*lscale+this.dx/2*lscale){
                if(point.y> this.stpt.y*lscale-this.dy/2*lscale && point.y< this.stpt.y*lscale+this.dy/2*lscale){
                    return(true);
                }
            }
            return(false);
        }    
        protected motion_x(){
           // this.stpt.x++;
           this.stpt.x+=this.vx;
            this.motion_x_check();
        }   
        protected motion_x_check(){
            if(this.stpt.x>1800){
               // this.move_x=false;
               this.stpt.x=50;
            }
        }
     }
     export class Text{
        font="20px Arial";
        color="black";
        angle=0;
        textalignment:CanvasTextAlign="left";
        stpt:Point;
        text:string;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        constructor(text:string,stpt:Point,canvas:HTMLCanvasElement){
            this.stpt=stpt;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.text=text;
        }
        draw():void{
            this.context.font=this.font;
            this.context.fillStyle=this.color;
            this.context.textAlign=this.textalignment;
            this.context.save();
            this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.rotate(this.angle*Math.PI/180);
            this.context.scale(1,-1);
            this.context.fillText(this.text,0,0);
            this.context.restore();

        }
     }
     export class tank extends Geometry{
        canvas:HTMLCanvasElement;
        fill_anim:boolean=false;
        height:number;
        width:number;
        fill_height:number=0;
        constructor(stpt:Point,height:number,width:number,canvas:HTMLCanvasElement){
            super();
            this.canvas=canvas;
            this.height=height;
            this.width=width;
            this.stpt=stpt;
            this.fill_anim=false;
        }
        fill(){
            this.fill_height++;
            this.fill_check();
        }
        fill_check(){
            if(this.fill_height>=this.height){
                this.fill_height=0;
            }
        }
        draw(): void {
            if(this.fill_anim){
                this.fill();
            }
           
         
            context.beginPath();
            context.rect((this.stpt.x-this.width/2)*lscale,(this.stpt.y-this.height/2)*lscale,this.width*lscale,this.fill_height*lscale);
            context.fillStyle="blue";
            context.strokeStyle="blue";
            context.lineWidth=1;
            context.fill();
            context.stroke();
            
            context.beginPath();
            context.rect((this.stpt.x-this.width/2)*lscale,(this.stpt.y-this.height/2)*lscale,this.width*lscale,this.height*lscale);
            context.strokeStyle="black";
            context.lineWidth=2;
             context.stroke();
        }
     }

     export class Sine extends Geometry{
        magnitude:number=100;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        points:Point[];
        k:number=0;
        geo:Geometry;
        constructor(stpt:Point,geo:Geometry,canvas:HTMLCanvasElement){
            super();
            this.stpt=stpt;
            this.geo=geo;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
        }
        protected calculate(): void {
            this.points=[];
            for(let i=0;i<=360;i++){
                let x=this.stpt.x+i;
                let y=this.stpt.y+this.magnitude*Math.sin(i*Math.PI/180);
                this.points.push(new Point(x,y));

            }
        }
        draw(): void {
            this.calculate();
            this.context.beginPath();
            this.context.moveTo(this.points[0].x*lscale,this.points[0].y*lscale);
            for(let i=1;i<=360;i++){
              this.context.lineTo(this.points[i].x*lscale,this.points[i].y*lscale) ;

            }
            this.context.lineWidth=2;
            this.context.strokeStyle="red";
            this.context.stroke();
            this.context.strokeStyle="black";
            this.geo.stpt=new Point(this.points[this.k].x,this.points[this.k].y);
            this.geo.draw();
            this.update();

        }
        protected update(){
            this.k++;
            if(this.k<360){
                this.k=0;
            }
        }
     }
 
    }
      
   