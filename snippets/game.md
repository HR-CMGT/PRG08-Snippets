# Game Loop

In de Game class starten we de game loop. Deze roept 60x per seconde de update functies van je game objecten aan. 

⚠️ Let op dat je geen requestAnimationFrame in je andere classes nodig hebt!

```typescript
import { Car } from "./car.js"

class Game {

    ford:Car
    kia:Car

    constructor() {
        this.ford = new Car()
        this.kia = new Car()
        this.gameLoop()
    }

    gameLoop(){
        this.ford.update()
        this.kia.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}
```

```typescript
export class Car {
    x = 10
    update(){
        this.x ++
    }
}
```

<Br>
<Br>

## Game Pause

Het is eenvoudig om je game te pauzeren: stop met het aanroepen van de game loop! Let wel op dat je bij een `unpause` ook weer de gameLoop opstart.

```typescript
import { Car } from "./car.js"

class Game {

    paused:boolean

    constructor() {
        this.paused = false
        this.gameLoop()
    }

    gameLoop(){
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}
```
Je kan een button toevoegen die wisselt tussen pause en play:
```typescript
constructor(){
    btn.addEventListener("click", ()=>togglePause())
}
togglePause(){
    this.paused = !this.paused
    if(!this.paused){
        this.gameLoop() // restart the gameloop
    }
}
```
