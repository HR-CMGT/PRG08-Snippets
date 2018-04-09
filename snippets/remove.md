## Een GameObject verwijderen

Game.ts heeft gameobjects. Een gameobject heeft een update functie die door game wordt aangeroepen. Om een gameobject uit de game te verwijderen moet je letten op:

- Het Game Object mag geen code meer uitvoeren
- Het Game Object heeft geen HTML elementen meer in de DOM
- De verwijzing naar GameObject moet verwijderd worden uit Game.ts

### Code in game object stoppen

```
window.removeEventListener("keydown", this.callback)
clearInterval(this.intervalId)
```

### HTML elementen verwijderen

```
this.div.remove()
```

### De instance verwijderen

**Variabele**
```
this.ball = new Ball()
this.ball = undefined
```

**Array**
```
let i:number = array.indexOf(obj)
if(i != -1) {
	array.splice(i, 1)
}
```

### Compleet voorbeeld

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
		this.removeBall(this.balls[0])
	}

	public removeBall(b: Ball) {
        b.removeMe()

		let i : number = this.balls.indexOf(b)
		if(i != -1) {
			this.balls.splice(i, 1)
		}
	}
}
```