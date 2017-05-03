namespace Canvas {

    export class Example {

        private canvas : HTMLCanvasElement;
        private ctx : CanvasRenderingContext2D;
        private blocks : Array<Block>;

        constructor(){
            console.log("canvas example");

            // cast HTMLElement naar canvas element
            this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
            this.ctx = this.canvas.getContext("2d");

            this.blocks = new Array<Block>();
            for(let i = 0;i<30;i++) {
                this.blocks.push(new Block(this.ctx));
            }

            requestAnimationFrame(() => this.update());
        }

        private update():void {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            for(let b of this.blocks){
                b.update();
            }

            requestAnimationFrame(() => this.update());
        }
        
    } 
}