namespace Canvas {

    export class Block {

        private x:number;
        private y:number;
        private width:number;
        private height:number;
        private xspeed:number;
        private yspeed:number;
        private ctx:CanvasRenderingContext2D;

        constructor(c:CanvasRenderingContext2D){
            this.x = Math.random()*100;
            this.y = Math.random()*100;
            this.width = 40;
            this.height = 40;
            this.ctx = c;
            this.xspeed = Math.random() * 2;
            this.yspeed = Math.random() * 2;
        }

        public update():void {
            this.x += this.xspeed;
            this.y += this.yspeed;

            // check buiten beeld
            if(this.x + this.width > 400 || this.x < 0) this.xspeed *= -1;
            if(this.y + this.height > 200 || this.y < 0) this.yspeed *= -1;

            this.ctx.fillStyle = 'green';
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
    } 
}