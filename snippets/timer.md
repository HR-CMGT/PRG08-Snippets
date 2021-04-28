# Timer

In de game class hebben we een game loop met `requestAnimationFrame`. Die wordt **60x per seconde** aangeroepen. Deze game loop pauzeert automatisch als de browser tab geen focus heeft.

## Waarom geen setInterval

Als je bepaalde code maar 1 keer per seconde of nog minder vaak wil aanroepen, dan zou dat kunnen met `setInterval` of `setTimeout`. Die stoppen echter niet automatisch als de browsertab geen focus heeft, en ook niet als je zelf de gameloop hebt gepauzeerd. 

Daarom is het beter om al je time-based functies met een *counter* op te lossen:

<br>
<Br>

## Spawn enemies

In dit voorbeeld spawnen we elke 2 seconden een nieuwe vijand. Omdat `requestAnimationFrame` 60 keer per seconde afgaat, duren 2 seconden dus `120` frames.

```typescript
import { Enemy } from "./enemy.js"

class Game {

    spawnCounter:number = 0
    enemies:Enemy[] = []

    constructor() {
        this.gameLoop()
    }

    gameLoop(){
        this.spawnCounter++
        if(this.spawnCounter > 120) {
            this.spawnCounter = 0
            this.enemies.push(new Enemy())
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}
```
<br>
<br>

## Countdown clock

In dit voorbeeld telt een teller langzaam af

```typescript
import { Enemy } from "./enemy.js"

class Game {

    // 60 frames is 1 seconde, keer 60 is 1 minuut
    doomClock:number = 3600 

    constructor() {
        this.gameLoop()
    }

    gameLoop(){
        this.doomClock--
        let secondsLeft = Math.floor(doomClock / 60)
        console.log(`Only ${secondsLeft} seconds left!`)
        if(this.doomClock <= 0) {
            console.log("Doomsday has come!")
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}
```
