# Object Pool

Een object pool bevat al je game elementen die je wil kunnen updaten.

<br>
<br>

## Array van Cars

Als je van meerdere game objecten, bv. een `Car`, de update functie wil aanroepen kan je een array maken. Het type van de array is dan `Car[]` (een array van Cars).

Gebruik `for of` om alle objecten te updaten:

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