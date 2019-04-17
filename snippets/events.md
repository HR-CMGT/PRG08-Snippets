# Custom Events

Events stellen je in staat om het **loose coupling** principe van OOP toe te passen op objecten in je code. Dit betekent dat objecten geen directe link met elkaar hebben, maar dat ze toch op elkaar kunnen reageren.

Omdat er geen directe link is, voorkom je errors op het moment dat een van de objecten verwijderd wordt uit de game.

In dit voorbeeld luistert de game of er ergens in het spel een crash plaats vindt. Het maakt niet uit waar die events vandaan komen. 

```typescript

class Game {
    constructor() {

        window.addEventListener('crash', () => {
            console.log("there was a crash!")
        })
    
        let a = new Car()
    }
}
```
De car stuurt een crash event. De car hoeft niet te weten wie er naar die events luistert.

```typescript

class Car { 
    constructor() {
        window.dispatchEvent(new Event('crash'))
    }
}
``` 

## Event target meegeven

Als je wil weten welke car instance gecrashed is, dan kan je dat meesturen door in plaats van `new Event()` een `new CustomEvent()` aan te maken. Een custom event heeft een detail property waar je data aan mee kan geven.

In de listener moet je aangeven dat het event dat binnenkomt een custom event is.

```typescript
class Game {
    constructor() {

        window.addEventListener('crash', (e) => {
            console.log((e as CustomEvent).detail.name)
        })

        let a = new Car()
    }
}
class Car {
    public name = "toyota"
    constructor() {
        let crashEvent = new CustomEvent('crash', { detail: this })
        window.dispatchEvent(crashEvent)
    }
}
```

## Event Listener on elements

Events kunnen verstuurd worden vanaf zogeheten `Event Emitters`, bijvoorbeeld een DIV element. Nu kan je vanaf de game luisteren naar events van een specifiek object, in plaats van alle events van alle objecten. 

```typescript
class Car {
    public div: HTMLElement
    public name = "toyota"
    
    constructor() {
        this.div = document.createElement("car")
        document.body.appendChild(this.div)
    }
    update(){
        this.div.dispatchEvent(new Event('crash'))
    }
}

class Game {
    constructor(){
        let c = new Car()
        
        // we weten nu dat het event van c afkomstig is
        c.div.addEventListener("crash", ()=>{
            this.registerCrash(c)
        })
        
        c.update()
    }
  
    registerCrash(c:Car){
        console.log(c.name + " crashed")
    }
}

new Game()
```

## Custom EventTarget

In Chrome en Firefox is het ook mogelijk om de car instance een event emitter te maken, door je eigen class ook een `EventEmitter` te maken. Nu kan je ook via `event.target` kijken welke Car het event gestuurd heeft.

```typescript
class Car extends EventTarget {
    this.dispatchEvent(new Event('crash'))
}

let c = new Car()
c.addEventListener("crash", (e)=>console.log(e.target + " has crashed"))
```


[Browser compatibiliy](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
