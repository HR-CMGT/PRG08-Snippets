namespace Canvas {
    export class AnimatedSprite {
        private framewidth: number = 200;
        private frameheight: number = 212;
        //private frames: number = 16;
        private counter:number = 0;
        private context:CanvasRenderingContext2D;
        private image:HTMLImageElement;

        constructor(c:CanvasRenderingContext2D) {
            this.context = c;

            // afbeelding laden
            this.image = new Image();
            
            // optioneel - check of de image wel is geladen
            this.image.onload = function() {
                //
            };

            // bron laden
            this.image.src = './images/sakuraspritesheet.png';
        }

        public update():void {
            this.counter += 0.3;

            // counter afronden om te voorkomen dat de frames te snel gaan
            let currentframe : number = Math.floor(this.counter);
            if(currentframe > 15) this.counter = currentframe = 0;

            // rij en kolom afleiden uit frame
            let column : number = currentframe % 4;
            let row : number = Math.floor(currentframe/4);
	        
            // het juiste stukje uit de afbeelding tekenen in de canvas
            let posx:number = 200;
            let posy:number = 0;
            let framex:number = 200 * column;
            let framey:number = 212 * row;
            this.context.drawImage(this.image, framex, framey, 200, 212, posx, posy, 200, 212);
        }
    }
}