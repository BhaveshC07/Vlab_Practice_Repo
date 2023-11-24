class Scene{
    container:{geo:Chemistry.Geometry}[]=[];
    constructor(){
        this.container=[];
    }
    add(geometry:Chemistry.Geometry){
        this.container.push({geo:geometry});
        this.draw();
    }
    draw(){
        context.clearRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<this.container.length;i++){
            this.container[i].geo.draw();
        }
        canvas_border();
    }
    area(name:string):number{
        for(let i=0;i<this.container.length;i++){
            if(this.container[i].geo.name==name){
                return(this.container[i].geo.area);
            }
        }
        return(0);
    }

}