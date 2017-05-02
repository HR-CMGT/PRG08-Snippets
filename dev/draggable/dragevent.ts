namespace Draggable {
    export class DragEvent {

        public clientX:number = 0;
        public clientY:number = 0;
        public altKey:boolean = false;

        // hier komt een mouseevent of een touchevent met touches binnen
        // dit wordt genormaliseerd naar een generiek object
        constructor(e:Event) {

            if(e.type != "touchmove" && e.type != "mousemove") console.log("EVENT " + e.type);
            
            switch(e.type){
            case "mousedown":
            case "mouseup":
            case "mousemove":
                let m:MouseEvent = <MouseEvent>e;
                this.clientX = m.clientX;
                this.clientY = m.clientY;
                this.altKey = m.altKey;
                break;
            case "touchcancel":
                console.log("TOUCH CANCEL");
            case "touchstart":
            case "touchmove":
                let allTouches:TouchEvent = <TouchEvent>e;
                let t:Touch = allTouches.targetTouches[0];
                this.clientX = t.clientX;
                this.clientY = t.clientY;
                break; 
            case "touchend":
                // touch end heeft geen touches (geen vingers op scherm)
                let all:TouchEvent = <TouchEvent>e;
                console.log("Touch end. Aantal touches: " + all.targetTouches.length);
                break;
            default :
                console.log("Unknown: " + e.type);
            }
        }
    }
}