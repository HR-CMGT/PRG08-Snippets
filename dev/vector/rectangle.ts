/// <reference path="vector2.ts" />

namespace Vector {
    export class Rectangle {
            
        public position:Vector2;
        public width:number;
        public height:number;
            
        constructor(p:Vector2, w:number, h:number) {
            this.position = p;
            this.width = w;
            this.height = h;
        }
        
        // kijk of een punt binnen deze rectangle is
        isInside(point: Vector2): boolean {
            var difference = this.position.difference(point);
            return Math.abs(difference.x) < this.width/2 && Math.abs(difference.y) < this.height/2;
        }
        
        // kijk of twee rectangles elkaar raken
        isOverlap(o2: Rectangle): boolean {
            var difference = this.position.difference(o2.position);
            return Math.abs(difference.x) < this.width/2 + o2.width/2 && Math.abs(difference.y) < this.height/2 + o2.height/2;
        }

    }
}