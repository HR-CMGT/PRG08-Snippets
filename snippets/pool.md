# Object Pool

Een object pool bevat al je game elementen die je wil kunnen updaten.

<br>
<br>

## Array van Cars

Als je van meerdere game objecten, bv. een `Car`, de update functie wil aanroepen kan je een **Object Pool** (een array) maken. Het **type** van die array is dan `Car[]`. Dat betekent: een array van Cars.

⚠️ Je moet de lege `cars` array nog wel aanmaken. Dat kan je doen met `cars:Car[] = []`. In onderstaand voorbeeld maken we de array aan in de constructor.

Gebruik vervolgens `for of` om alle objecten te updaten:

```typescript
import { Car } from "./car.js"

class Game {

    cars:Car[]

    constructor() {
        this.cars = [new Car(), new Car(), new Car()]
        this.gameLoop()
    }

    gameLoop(){
        for(let c of this.cars){
            c.update()
        }
    }
}
```
---

<br>
<br>
<br>

## Object verwijderen uit de pool

Als een object uit de game verwijderd moet worden, haal je eerst het HTML element uit de DOM, met `remove()`

```typescript
class Car {
    constructor(){
        this.element = document.createElement("car")
    }
    destroyCar() {
        this.element.remove()
    }
}
```
Daarna haal je het element uit de Object Pool van de Game class:
```typescript
class Game {
    removeFromPool(removedCar) {
        this.cars = this.cars.filter(car => car !== removedCar)
    }
}
```

---

<br>
<br>
<br>

## Meerdere typen objecten in de Pool

Door Inheritance te gebruiken kan je verschillende soorten objecten in de array zetten, in plaats van alleen cars:

```typescript
import { Car } from "./car.js"
import { Boat } from "./boat.js"

class Game {

    objects:GameObject[]

    constructor() {
        this.objects = [new Car(), new Boat()]
        this.gameLoop()
    }

    gameLoop(){
        for(let o of this.objects){
            o.update()
        }
    }
}
```

Inheritance:

```typescript
class GameObject {
    private x = 10
    update(){
        this.x ++
    }
}

export class Car extends GameObject {

}

export class Boat extends GameObject {

}
```

<br>
<Br>
<br>

## Collisions met objecten in de Object Pool

Als je wil checken of een speler een van de objecten in de pool raakt, is het makkelijker om de speler zelf niet in de object pool te plaatsen. Je kan dan met een `for of` loop de collisions checken.

In dit voorbeeld checken we elke update of de speler een van de vijanden raakt:

```typescript
class Game {

    enemies:Enemy[]
    player:Player

    constructor(){
        this.player = new Player()
        this.enemies = [new Enemy(), new Enemy(), new Enemy()]
        this.gameLoop()
    }

    gameLoop(){
        for(let enemy of this.enemies){
            let hit = this.checkCollision(this.player.getRectangle(), enemy.getRectangle())
            if(hit) {
                console.log(`the player hits enemy ${enemy}`)
            }
        }
        requestAnimationFrame(()=>this.gameLoop())
    }
  
    checkCollision(a: ClientRect, b: ClientRect) {
      return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
   }
}
```