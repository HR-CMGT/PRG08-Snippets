## Een GameObject verwijderen

Om een gameobject uit de game te verwijderen moet je letten op:

- Het Game Object mag geen code meer uitvoeren
- Het Game Object heeft geen HTML elementen meer in de DOM
- De verwijzing naar het Game Object moet verwijderd worden uit Game.ts

### DOM element verwijderen

```
this.div.remove()
```

### instance verwijderen uit game.ts

**Variabele**
```
this.ball = new Ball()
this.ball = undefined
```
Omdat je nu een undefined variabele hebt, is het mooier om je instances in een array bij te houden:

**Array**
```
let balls = [new Ball(), new Ball()]
let b = balls[0]
let i = array.indexOf(b)
balls.splice(i, 1)
```


## Listeners en intervals verwijderen

Omdat het werken met listeners en intervals snel onoverzichtelijk kan worden is het vaak beter om een parent object te hebben waarin je intervals en listeners plaatst. 

### Listeners verwijderen

Om een listener te verwijderen moet je een referentie opslaan.
```
class Test {
    private callback:EventListener

    constructor(){
        this.callback = (e:KeyboardEvent) => this.keyWasPressed(e)
        window.addEventListener("keydown", this.callback)
    }

    private keyWasPressed(e:KeyboardEvent):void {
        window.removeEventListener("keydown", this.callback)
    }
}
```

### Interval verwijderen

Om een interval te verwijderen moet je de id van de interval opslaan.
```
class Test {
    private intervalId
    constructor(){
        this.intervalId = setInterval(() => this.doSomething(), 300 )
    }

    public doSomething():void {
        clearInterval(this.intervalId)
    }
}
```

### Compleet voorbeeld

De ball class heeft een `removeMe()` method waarmee de ball zijn eigen listeners en intervals uit zet.
Daarna kan je het DOM element verwijderen en de verwijzing naar de ball uit game.ts verwijderen.

```
class Ball {
    callback:EventListener
    intervalId:number
    constructor(){
        this.callback = (e:KeyboardEvent) => this.keyWasPressed(e)
        window.addEventListener("keydown", callback)
        this.intervalId = setInterval(() => this.doSomething(), 300 )
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
	}

	public update() {
        let b = this.balls[0]

        b.removeMe()
		let i = this.balls.indexOf(b)
		this.balls.splice(i, 1)
	}
}
```