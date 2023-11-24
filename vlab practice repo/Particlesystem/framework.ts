namespace Geometry {
    export class particle {
        public x: number;
        public y: number;
        public vx: number;
        public vy: number;
        public color: string;
        public context: CanvasRenderingContext2D;
        public radius: number;
        public yconst: number;
        alpha = Math.random();
        constructor(context: CanvasRenderingContext2D) {
            this.context = context;
            this.vx = 10 * Math.random();
            this.vy = 5;
            this.color = "#33bbff"; //"#3885fb";
            this.radius = 6 * Math.random();
            this.x = Math.random() * 1600 + 20;
            this.y = Math.random() * 400 + 40;
            if (this.y + this.radius >= 440) {
                this.y = this.y - this.radius;
            }
            if (this.y + this.radius >= 440) {
                this.y += this.radius;
            }
            this.yconst = this.y;
        }
        public draw() {
            this.update();
            this.context.save();
            this.context.beginPath();
            this.context.globalAlpha = this.alpha;
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 1;
            //this.alpha;//Math.random();
            this.context.stroke();
            this.context.restore();
        }
        public update() {
            if (this.x > 1620) {
                this.x = 0;
            }
            this.x += this.vx//*Math.random();
            // var ang = Math.random()*360*Math.PI;
            //this.y=this.yconst+this.vy*Math.sin(ang);
        }
    }
}