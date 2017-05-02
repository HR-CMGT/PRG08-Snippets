
/// <reference path="dragevent.ts" />

namespace Draggable {
    export class DraggableObject {
        
        private htmlElement:HTMLElement;
        private moveBind: any;
        private touchMoveBind: any;
        private x      : number;
        private y      : number;
        private scale  : number = 1;
        private offSetX = 0;
        private offSetY = 0;  

        private down:string = "mousedown";
        private up:string = "mouseup";
        private move:string = "mousemove";
        private eventType:string = "mouseEvent";   
        
        constructor(x: number, y: number, HTMLtagName: string, offx:number, offy:number) {
            this.htmlElement = document.createElement(HTMLtagName);
            document.body.appendChild(this.htmlElement);

            this.checkTouchSupport();

            this.x = x;
            this.y = y;
            this.offSetX = offx;
            this.offSetY = offy;  
            this.draw();
            
            // referentie naar functie opslaan omdat je anders geen removeEventListener kan doen
            this.moveBind = (e: Event) => this.updatePosition(e);

            this.htmlElement.addEventListener(this.down, (e) => this.initDrag(e));
            this.htmlElement.addEventListener(this.up  , (e) => this.stopDrag(e));  

        }



        /* mouse handlers */
        private initDrag(e: Event) : void {
            e.preventDefault();

            // touch en mouse events omzetten naar generiek event
            let event:DragEvent = new DragEvent(e);
            
            // HET ITEM HIER BOVENIN DE DOM ORDER ZETTEN, ANDERS KAN JE ONDER ANDERE ELEMENTEN SLEPEN - DAN WERKT DROP NIET
            this.htmlElement.parentElement.appendChild(this.htmlElement);     

            // offset verandert na elke klik op dit object
            this.offSetX = event.clientX - this.x;
            this.offSetY = event.clientY - this.y;  
            
            window.addEventListener(this.move, this.moveBind);
        }
        
        private updatePosition(e: Event): void {
                    
            e.preventDefault();

            // touch en mouse omzetten naar generiek event
            let event:DragEvent = new DragEvent(e);

            this.x = event.clientX - this.offSetX;
            this.y = event.clientY - this.offSetY;

            this.draw();
        }
        
        private stopDrag(e: Event) : void {
            // touch event does not always remove this listener?
            window.removeEventListener(this.move, this.moveBind);

            e.preventDefault();
            console.log("STOP DRAG:  remove listener: " + this.move);
            
        }

        private draw(): void {
            this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
        }

        // demo events voor touch screen
        private checkTouchSupport(){
            if ('ontouchstart' in window) {
                this.down = "touchstart";
                this.up = "touchend";
                this.move = "touchmove";
                this.eventType = "touchEvent";
            }
        }
    }
}