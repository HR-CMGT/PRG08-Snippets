# Game Loop

In de Game class starten we de game loop. Deze roept 60x per seconde de update functies van de game objecten aan. Let op dat je geen requestAnimationFrame in je andere classes nodig hebt!

```
class Game {

    car:Car

    constructor() {
        this.car = new Car()
        this.gameLoop()
    }

    gameLoop(){
        this.car.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}

class Car {
    private x = 10
    update(){
        this.x ++
    }
}
```

## Game Objecten in Array

Als je van meerdere game objecten de update functie wil aanroepen kan je een array maken

```
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
## Inheritance

Door Inheritance te gebruiken kan je verschillende soorten objecten in de array zetten, in plaats van alleen cars:

```
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

class GameObject {
    private x = 10
    update(){
        this.x ++
    }
}

class Car extends GameObject {

}

class Boat extends GameObject {

}
```