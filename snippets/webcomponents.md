## Web Components

By using web components, we can create game objects that are also DOM objects. This makes it much easier to add and remove elements to a DOM Game. 

[Jump to finished example code](#completeexample)

### What are Web Components?

A web component is a HTML element that allows us to add our own code. This example creates an HTML element that has a `drive()` method. The element also adds itself to the DOM!

```
class Car extends HTMLElement {

    constructor(){
        super()
        document.body.appendChild(this)
    }
    
    drive(){
        console.log("VROOM!")
    }
}
```
To use web components, they have to be registered. Note that the html tag needs to contain a hyphen:
```
window.customElements.define("car-component", Car);
```

In our Game class, we can now create `new Car()` and it will automatically become a DOM element.
```
this.car = new Car()
this.car.drive()
```

This will result in a `<car-component></car-component>` being added to your HTML structure, and the message `VROOM!` will appear in the console. 

### Game Loop

Our game class will create a array of cars and start the game loop. A game loop updates our game elements 60 times per second using `requestAnimationFrame`. 

```
class Game {
    cars : Car[]
    constructor() {
        this.cars = [new Car(), new Car(), new Car()]
    }
    update(){
        for(let c of this.cars) {
	    c.drive()
	}
        requestAnimationFrame(()=>this.update())
    }
}
```

### Lifecycle

A custom element has lifecycle hooks: these methods get called automatically when the Car is added to, or removed from, the DOM.
```
class Car extends HTMLElement {

    public connectedCallback(): void {
        console.log("A car was added to the DOM");
    }

    public disconnectedCallback():void{
        console.log("hey! someone removed me from the DOM!");
    }
}
```

### Removing cars

Since the car extends from HTMLElement we can use the `remove()` method, which removes it from the DOM. 

```
let c = new Car()      // adds car to the DOM
c.remove()             // removes car from the DOM
```

We can use the `disconnectedCallback()` to execute some final code before the car is removed from the DOM.

```
class Car {
   public disconnectedCallback():void{
       console.log("this car is about to be removed from the game!");
   }
}
```
Note that if you keep references to the car in your `Game` class, you need to remove those too!
```
this.cars = [new Car(), new Car(), new Car()]

// we will remove car 0 from the game
let index = 0
this.cars[index].remove()        // remove element from DOM
this.cars.splice(index, 1)       // remove reference
```

### Style

The styling of custom elements is done in CSS.

```
car-component {
    position: absolute;
    display: block;
    width:168px; height:108px;
}
```
We position our elements using `css transform`, so that we can use the GPU for smooth animation.

```
update() {
    this.style.transform = `translate(${this.x}px, ${this.y}px)`
}
```

### DOM query

Ideally, your game keeps track of all existing cars, but you can also query the DOM for car components. Note that this query returns a NodeList instead of an Array.
```
let cars : NodeListOf<Car> = document.querySelector("car-component") as NodeListOf<Car>;

for(let c of cars){
    c.drive()
} 
```

### Browser support

To compile typescript with custom components, set the compile target to `es6` in `tsconfig.json`. Note that not all browsers support custom components fully. 

```
{
    "compilerOptions": {
        "target": "es6"
    }
}
```

# <a id="completeexample"></a>Complete Example #

CAR.TS
```typescript
class Car extends HTMLElement {

    private x:number
    private y:number

    constructor() {
        super()
        document.body.appendChild(this)

        this.x = Math.random() * 100
        this.y = Math.random() * 700

        this.update()
    }

    public disconnectedCallback(): void {
        console.log("this car is about to be removed from the game!");
    }
    
    public update() {
        this.x++
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

window.customElements.define("car-component", Car)
```
GAME.TS
```typescript
class Game {

    private cars:Car[]

    constructor() {
        this.cars = [new Car(), new Car(), new Car(), new Car()]

        // remove car 0 from dom AND from array
        let index = 0
        this.cars[index].remove()    // remove from DOM
        this.cars.splice(index, 1)   // remove from array

        this.update()
    }

    private update() {
        for (let c of this.cars) {
            c.update()
        }
        requestAnimationFrame(() => this.update())
    }
}

window.addEventListener("load", () => new Game())
```
CSS
```css
car-component {
    display:block;
    position: absolute;
    width:100px;
    height:100px;
    background-color:lightblue;
}
```
TSCONFIG.JSON
```json
{
    "compilerOptions": {
        "strict": true,
        "target": "es6",
        "removeComments": true,
        "noUnusedLocals": true,
        "strictPropertyInitialization": false,
        "noImplicitAny": true,
        "noUnusedParameters": true,
        "sourceMap": true,
        "outFile": "docs/js/main.js"
    },
    "include": [
        "dev/**/*"
    ]
}
```
