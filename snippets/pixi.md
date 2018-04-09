# PixiJS in Typescript

- Setup
- Tekenen met PIXI
- Game Loop

[Demo page](https://kokodoko.github.io/Pixi/)

## Setup

### Download library

[Download](https://github.com/pixijs/pixi.js/releases/tag/v4.0.0) **pixi.min.js** en **pixi.min.js.map** en plaats ze in `docs/js/`

### Definition file

[Download de .d.ts definition file](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pixi.js/index.d.ts) voor Typescript en plaats deze in de map definitions.

### HTML

Laad de library voordat je je eigen main.js inlaadt.
```
<body> 
      <script src="js/pixi.min.js"></script>
      <script src='js/main.js'></script>
</body>
```

## Tekenen met PIXI

### Canvas aanmaken

Initialiseer PIXI met een canvas, in de main game class. We maken een aparte functie voor render, zodat we die later ook weer kunnen aanroepen.
```
class Game {
    
    private renderer:PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    private stage:PIXI.Container;

    constructor() {
        this.renderer = PIXI.autoDetectRenderer(640, 480);
        document.body.appendChild(this.renderer.view);
        this.stage = new PIXI.Container();
        this.render();
    }

    private render():void {
        this.renderer.render(this.stage);
    }
} 

```
### Een cirkel tekenen

Om te testen of PIXI werkt tekenen we een cirkel in de canvas. Vergeet niet om addCircle() aan te roepen in de constructor. Kijk in de [API documentatie](http://pixijs.download/release/docs/index.html) om te zien welke methods er beschikbaar zijn. 

```
class Game {
    private addCircle():void {
        let pixiCircle = new PIXI.Graphics();
        pixiCircle.lineStyle(2, 0xFF00FF); 
        pixiCircle.drawCircle(110, 110, 20);
        this.stage.addChild(pixiCircle);
        this.render();
    }
} 
```

### Sprites laden en tekenen

We gaan alle benodigde sprites voor de game **preloaden** in game.ts via `Loader.add`. We kunnen een shortcut meegeven zodat we de image later makkelijk terug kunnen vinden: `Loader.add('car', 'images/car.png')`. De functie setupSprites wordt aangeroepen als alle images geladen zijn. Daarna bouwen we sprites van de images, en we voegen de sprites toe aan de stage.

```
class Game {
    private preloadSprites():void {       
        PIXI.loader.add('car', 'images/car.png').add('road', 'images/road.png');
        PIXI.loader.load(() => this.setupSprites());
    }
    private setupSprites():void{
        let road = new PIXI.Sprite(PIXI.loader.resources["road"].texture);
        let car = new PIXI.Sprite(PIXI.loader.resources["car"].texture);
        this.stage.addChild(road, car);
        this.render();
    }
}
```

## Game Loop

Als het bovenstaande gelukt is kunnen we het aanmaken en updaten van objecten gaan verplaatsen naar gameobject instances. Als de preloader klaar is maken we nieuwe instances en we starten de Game Loop. De game loop update alle objecten en rendert daarna de PIXI canvas. 

```
class Game {
    private setupSprites():void{
        // hier je gameobjecten aanmaken
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        // hier je gameobjecten updaten
        this.renderer.render(this.stage);
        requestAnimationFrame(() => this.gameLoop());
    }
}
```

## PIXI tips

**Infinite scroll**

Door de offset van een texture te verplaatsen kan je een infinite scroll effect bereiken. Om dat te kunnen doen maken we een TilingSprite.
```
let tilingSprite = new PIXI.extras.TilingSprite(
    PIXI.loader.resources["road"].texture, 
    640,
    480
);
stage.addChild(tilingSprite);
tilingSprite.tilePosition.x-=2;
```

**Groepeer sprites**
```
let animals = new PIXI.Container();
animals.addChild(cat);
animals.addChild(hedgehog);
animals.addChild(tiger);
stage.addChild(animals);
```

**Collision detection**
```
hitTestRectangle(spriteOne, spriteTwo)
```

## Links

- [Website](http://www.pixijs.com)
- [Code Examples demo](https://pixijs.github.io/examples/#/basics/basic.js)
- [Javascript Tutorial](https://github.com/kittykatattack/learningPixi)
- [Library files](https://github.com/pixijs/pixi.js/releases/tag/v4.0.0)
- [Typescript definition file](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pixi.js/index.d.ts) 
- [API](http://pixijs.download/release/docs/index.html)
