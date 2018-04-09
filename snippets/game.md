# Game Loop en GameObject

In de Game class starten we de game loop. Deze roept 60x per seconde de update functies van de game objecten aan. De andere game objecten hebben geen eigen loop nodig, alleen een update functie. De game objecten hou je bij in een array.

```
class Game {

    objects:GameObject[]

    constructor() {
        this.objects = GameObject[]
        this.gameLoop()
    }

    gameLoop(){
        for(let o of this.objects){
            o.update()
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}
```

De game objecten gebruiken inheritance zodat ze altijd de basis eigenschappen van een DOM element hebben. Via de constructor van de child geef je aan welk HTML element aangemaakt moet worden, en wat het parent HTML element is.

```
class GameObject {

    public div:HTMLElement
    public x:number
    public y:number
    public width:number
    public height:number
            
    constructor(tag:string, parent:HTMLElement) {
        this.div = document.createElement(tag)
        parent.appendChild(this.div)
    }

    public update(){
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

class Car extends GameObject {
    private speed:number
    constructor(){
        super("car", document.body)
        this.x = 100
        this.y = 200
    }
}
```