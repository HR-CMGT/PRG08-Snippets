## Positie en afmeting van een DOM element

Je kan van een DOM element de [positie en afmeting opvragen](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect) via een **rectangle**: `let rectangle : ClientRect = div.getBoundingClientRect()`. 

In dit voorbeeld geeft de `Car` class zijn positie terug via de `getRectangle()` method:

```
class Car {
   private div:HTMLElement
   
   constructor() {
        this.div = document.createElement("car")
        document.body.appendChild(this.div)
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
}
```

## Rectangle Collision

Een rectangle heeft x, y, width en height waarden. Die waarden kan je gebruiken om te zien of twee rectangles overlappen. In dit voorbeeld checken we in de Game class of twee Cars elkaar raken:
```
class Game {
  constructor(){
     let c1 = new Car()
     let c2 = new Car()
     
     let hit = this.checkCollision(c1.getRectangle(), c2.getRectangle())
     console.log("cars hit is " + hit)
  }
  
  checkCollision(a: ClientRect, b: ClientRect) {
      return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
   }
}
```

## Circle collision

Als de afstand tussen de middelpunten van twee cirkels kleiner is dan de radius van de twee cirkels, dan is er een collision.

```
// afstand tussen twee cirkels
let dx = circle1.x - circle2.x
let dy = circle1.y - circle2.y
let distance = Math.sqrt(dx * dx + dy * dy)

// als afstand kleiner dan de radius van de twee cirkels
if (distance < circle1.radius + circle2.radius) {
    console.log("collision!")
}
```

## Vector 

De [vector class](vector.md) maakt het uitrekenen van afstanden tussen punten eenvoudiger.

## Zelf coördinaten bijhouden

Als je niet werkt met DOM elementen, of de collision box is niet hetzelfde als de afmeting van het DOM element, dan moet je zelf de waarden bijhouden. Je kan dit het beste doen met overerving:

```
class GameObject {
    publix x:number
    public y:number
    public width:number
    public height:number
}

class Car extends GameObject {

}
```

## Grote hoeveelheid collisions

Als je honderden of meer objecten hebt die allemaal kunnen botsen, dan wordt het inefficient om met een loop door alle gameobjects te gaan. Een QuadTree checkt alleen de elementen die daadwerkelijk bij elkaar in de buurt zijn

- [QuadTree : large scale collision detection](https://github.com/timohausmann/quadtree-js)

## Advanced collisions

Als je complexe vormen of roterende vormen met elkaar wil laten botsen, dan kan je werken met een physics engine. Matter JS berekent de posities en collisions van complexe vormen die een snelheid hebben. Je kan het resultaat zelf rendereren in de DOM of in een Canvas

- [Matter Physics Basics](snippets/matter.md)

## Links

- [2D collision](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
