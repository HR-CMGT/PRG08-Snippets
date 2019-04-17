# Custom Events

Events stellen je in staat om het **loose coupling** principe van OOP toe te passen op objecten in je code. Een object hoeft zelf niet te weten wat zijn context is, in plaats daarvan stuurt hij een event zodra er iets gebeurt. 

In dit voorbeeld luistert de game of er een crash plaats vindt. De car stuurt een crash event. Omdat de events via `window` gaan is er is geen directe link nodig tussen game en car.

```typescript

class Game {
    constructor() {

        window.addEventListener('crash', () => {
            console.log("there was a crash!")
        })
    
        let a = new Car()
    }
}

class Car { 
    constructor() {
        window.dispatchEvent(new Event('crash'))
    }
}
``` 

## Event target meegeven

Als je wil weten welke car instance gecrashed is, dan kan je dat meesturen door eerst een custom event aan te maken. Een custom event heeft een detail property waar je data aan mee kan geven.

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
