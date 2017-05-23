// documentatie
// http://brm.io/matter-js/docs/

// type definitions
// https://www.npmjs.com/package/@types/matter-js

class Game {
    
    private engine : Matter.Engine;
        
    constructor() {
        this.setupMatter();
        this.addObjects();
    }
        
    private setupMatter(){
        this.engine = Matter.Engine.create();

        var render = Matter.Render.create({
            element: document.body,
            engine: this.engine
        });

        Matter.Engine.run(this.engine);
        Matter.Render.run(render);
    }
    
    private addObjects():void {
        let boxA:Matter.Body = Matter.Bodies.rectangle(400, 200, 80, 80);
        let boxB:Matter.Body = Matter.Bodies.rectangle(450, 50, 80, 80);
        let circ:Matter.Body = Matter.Bodies.circle(220,120,20);
        let ground:Matter.Body = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        Matter.World.add(this.engine.world, [boxA, boxB, circ, ground]);
    }  
} 


window.addEventListener("load", function() {
    new Game();    
});

