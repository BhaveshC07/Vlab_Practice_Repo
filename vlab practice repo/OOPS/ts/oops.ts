class Polygon{
    private _l:number;
    private _n:number;
    private _canvas:HTMLCanvasElement;
    private _x:number;
    private _y:number;
    private _name:string;
    private _id:number;
    movable:boolean=true;
    constructor(l:number,n:number,canvas:HTMLCanvasElement,x:number,y:number,id:number,name:string){
        this._l=l;
        this._n=n;
        this._canvas=canvas;
        this._x=x;
        this._y=y;
        this._name=name;
        this._id=id;

    }
    display(){
        console.log("name="+this._name);
        console.log("l="+this._l);
        console.log("n="+this._n);
        console.log("x="+this._x);
        console.log("y="+this._y);
        console.log("id="+this._id);
    }
    set x(x:number){
        if(this.movable && x>0){
            this._x=x;
        }
        else{
            console.log("check it is movable or x is positive")
        }
    }
    get x():number{
        return(this._x);
        }
}
