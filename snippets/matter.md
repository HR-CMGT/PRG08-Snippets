# Matter Physics

Met Matter.js kan je physics toevoegen aan je game. Om Matter (of een andere library) te gebruiken met typescript moet je ook de type definitions downloaden. Dit zorgt ervoor dat je editor de Matter functies kan invullen en checken.

Maak een map genaamd 'typings' of 'definitions' in je project en plaats daar de `matter.d.ts` file in. Je kan ook via `npm install --save @types/matter-js` de typings installeren.

Je HTML file moet naast je eigen .js file ook de minified matter.js file inladen.
```html
<script src="js/matter.min.js"></script>
<script src='js/mygame.js'></script>
```

## Code voorbeeld

Je moet eenmalig de physics world initialiseren. Vervolgens kan je daar physics objecten in plaatsen. Matter heeft een ingebouwde render functie om direct te kunnen zien of het werkt. 
```typescript
class Game {
    
    private engine : Matter.Engine;
        
    constructor() {
        //
        // SETUP MATTER WORLD
        //
        this.engine = Matter.Engine.create();

        var render = Matter.Render.create({
            element: document.body,
            engine: this.engine
        });

        Matter.Engine.run(this.engine);
        Matter.Render.run(render);
    
        //
        // ADD PHYSICS OBJECTS TO THE WORLD
        //
        let boxA:Matter.Body = Matter.Bodies.rectangle(400, 200, 80, 80);
        let boxB:Matter.Body = Matter.Bodies.rectangle(450, 50, 80, 80);
        let circ:Matter.Body = Matter.Bodies.circle(220,120,20);
        let ground:Matter.Body = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        Matter.World.add(this.engine.world, [boxA, boxB, circ, ground]);
    }  
} 
```

## Graphics

Door de coordinaten van de physics objecten uit te lezen kan je je eigen graphics gaan gebruiken. Zie voor een uitgebreide uitleg daarvan het Coding Train filmpje op Youtube.

## Links

- [Matter JS](http://brm.io/matter-js/)
- [Type Definitions](https://www.npmjs.com/package/@types/matter-js)
- [Coding Train Matter Tutorial](https://www.youtube.com/watch?v=urR596FsU68)