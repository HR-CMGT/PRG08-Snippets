/// <reference path="vector/vector2.ts"/>
/// <reference path="vector/rectangle.ts"/>

namespace Game {

    export class Snippets {
                
        constructor() {
            
            this.vectorExample();
        }
        
        private vectorExample() : void {
                        
            // vector2 heeft x, y en static methods
            let v1 = new Vector.Vector2(20,35);
            let v2 = new Vector.Vector2(100,120);

            v1 = v1.add(v2);
            console.log("Added v1 and v2: " + v1.x + "," + v1.y);
            let v3 = v1.difference(v2);
            console.log("Difference between: " + v1.x + "," + v1.y + " and " +  v2.x + "," + v2.y + " is " +  v3.x + "," + v3.y);
      
            let v5 = new Vector.Vector2(100,100);
            console.log("Lengte van " +v5.x + "," + v5.y + " is " + v5.magnitude());
            
            // normalize is dezelfde vector met een magnitude van 1 - dit gebruik je voor de richting
            let v6 = v5.normalize();
            console.log("Vector: " + v5.x + "," + v5.y + " normalized is " + v6.x + "," + v6.y);
            
            let r1:Vector.Rectangle = new Vector.Rectangle(new Vector.Vector2(20,20), 100, 100);
            let v7:Vector.Vector2 = new Vector.Vector2(25,25);
            
            // punt binnen rectangle?
            let hit:boolean = r1.isInside(v7);
            console.log("Is vector " + v7.x + "," + v7.y + " inside " + r1.position.x + "," + r1.position.y + "," + r1.width + "," + r1.height + " = " + hit);
                        
            // rectangles overlap?
            let r2:Vector.Rectangle = new Vector.Rectangle(new Vector.Vector2(30,30), 200, 150);
            let hit2 = r1.isOverlap(r2);
            console.log("Does rectangle " + r2.position.x + "," + r2.position.y + "," + r2.width + "," + r2.height + " overlap " + r1.position.x + "," + r1.position.y + "," + r1.width + "," + r1.height + " = " + hit);
        }
        
        
        // zet een div in de dom
        private addMessage(str:string):void {
            let div = document.createElement("div");
            div.innerHTML = str;
            document.body.appendChild(div);
        }
        

    } 
}

window.addEventListener("load", () => new Game.Snippets());