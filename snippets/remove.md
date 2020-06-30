## Een GameObject verwijderen

Om een gameobject uit de game te verwijderen moet je letten op:

- Het Game Object mag geen code meer uitvoeren
- Het Game Object heeft geen HTML elementen meer in de DOM
- De verwijzing naar het Game Object moet verwijderd worden uit Game.ts

### DOM element verwijderen

```typescript
this.div.remove()
```

### verwijzing verwijderen uit game.ts

```typescript
let balls = [new Ball(), new Ball(), new Ball()]
let removedBall = balls[0]

balls = balls.filter(ball => ball !== removedBall)

// In ES5 kan je met splice de array aanpassen:
let i = array.indexOf(b)
balls.splice(i, 1)
```

**Uit array verwijderen tijdens gameloop**

Als je een gameobject uit een array verwijdert, dan verandert de structuur van je array. Dit kan een probleem zijn als je nog door die array heen aan het loopen bent.

Je kan dit probleem oplossen door *van achter naar voren* door je game objecten heen te loopen, en/of de loop te stoppen met `break` als je een item verwijderd hebt.

```typescript
update() {
    for(let i = this.objects.length; i>=0; i--){
    
        let item = this.objects[i]
      
        if(item.playerWasKilled) {     // voorbeeld: dit item moet verwijderd worden

            // verwijder het object tijdens de loop
            objects.splice(i,1)
    
            // stop de loop
            break;
	      }
    }
}
```

## Listeners verwijderen

Om een listener te verwijderen moet je een referentie opslaan.
```typescript
class Test {
    private callback:EventListener

    constructor(){
        this.callback = (e:Event) => this.keyWasPressed(e)
        window.addEventListener("keydown", this.callback)
    }

    private keyWasPressed(e:Event):void {
	console.log("you pressed a key")
    }
    
    private removeTest():void {
        window.removeEventListener("keydown", this.callback)
    }
}
```

## Interval verwijderen

Om een interval te verwijderen moet je de id van de interval opslaan.
```typescript
class Test {
    private intervalId:number
    constructor(){
        this.intervalId = setInterval(() => this.doSomething(), 300 )
    }

    public doSomething():void {
        clearInterval(this.intervalId)
    }
}
```

## Compleet voorbeeld

De ball class heeft een `removeMe()` method waarmee de ball zijn eigen listeners en intervals uit zet.
Daarna kan je het DOM element verwijderen en de verwijzing naar de ball uit game.ts verwijderen.

```typescript
class Ball {
    callback:EventListener
    intervalId:number
    constructor(){
        this.callback = (e:Event) => this.keyWasPressed(e)
        window.addEventListener("keydown", this.callback)
        this.intervalId = setInterval(() => this.doSomething(), 300 )
    }
    private keyWasPressed(e:Event){
        console.log("you pressed a key")
    }
    public removeMe() {
        window.removeEventListener("keydown", this.callback)
        clearInterval(this.intervalId)
        this.div.remove()
    }
}

class Game {
	balls: Ball[]
	constructor() { 
	    this.balls = [new Ball(), new Ball(), new Ball()]

            let b = this.balls[0]

            // vertel de bal om zijn DOM element te verwijderen en listeners+intervals te stoppen
            b.removeMe()
	    
	    // zoek de positie van de bal in de gameobject array
	    let i = this.balls.indexOf(b)
	    
	    // verwijder de bal uit de gameobject array
	    this.balls.splice(i, 1)
	}
}
```
## Web components

Met [Web Components](webcomponents.md) is het makkelijker om een game element en zijn bijbehorende DOM element uit een game te verwijderen
