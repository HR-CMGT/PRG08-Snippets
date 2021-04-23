# Collision detection

We kunnen met een eenvoudige formule checken of twee rechthoekige vormen elkaar raken.

<br>
<br>

## Positie en afmeting van een DOM element

Je kan van een DOM element de [positie en afmeting opvragen](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect) via een **rectangle**: `let rectangle : ClientRect = div.getBoundingClientRect()`. 

In dit voorbeeld geeft de `Car` class zijn positie terug via de `getRectangle()` method:

```typescript
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

<Br>
<br>
<br>

## Rectangle Collision

In dit voorbeeld checken we in de Game class of twee Cars elkaar raken:

```typescript
class Game {
  constructor(){
     let c1 = new Car()
     let c2 = new Car()
     
     let hit = this.checkCollision(c1.getRectangle(), c2.getRectangle())
     console.log(`car 1 hits car 2 : ${hit}`)
  }
  
  checkCollision(a: ClientRect, b: ClientRect) {
      return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
   }
}
```
<br>
<br>

## Niet door de muur rijden

Als je niet door een muur wil kunnen bewegen, moet je checken of de **toekomstige positie** een botsing gaat veroorzaken. Als dat zo is, dan beweeg je niet.

```typescript
class Game {
   update() {
       let wallRect = wall.getRectangle()
       let carRect = car.getFutureRectangle()

       if (this.checkCollision(wallRect, carRect)) {
           console.log("Je kan niet door de muur")
       } else {
           car.update()
       }
   }
}
```

In Car geven we een rectangle terug waarin we de **speed al hebben meegerekend**. Daardoor kan de Game checken of de auto wel of niet zijn update functie mag doen.
```typescript
class Car {
   speed = 4
   getFurureRectangle(){
      let rect = this.div.getBoundingClientRect()
      rect.x += this.speed
      return rect
   }
   update{){
      this.x += speed
   }
}
```
<br>
<br>
<br>

## Hit Box 

Als je **hit box** kleiner is dan de DIV van je game element, dan kan je ook een kleinere rectangle teruggeven:
```typescript
class Car {
   getRectangle(){
      let rect = this.div.getBoundingClientRect()
      rect.x += 10
      rect.y += 10
      rect.width -= 10
      rect.height -= 10
      return rect
   }
}
```

<br>
<br>
<br>

## Circle collision

Als de afstand tussen de middelpunten van twee cirkels kleiner is dan de radius van de twee cirkels, dan is er een collision.

```typescript
// afstand tussen twee cirkels
let dx = circle1.x - circle2.x
let dy = circle1.y - circle2.y
let distance = Math.sqrt(dx * dx + dy * dy)

// als afstand kleiner dan de radius van de twee cirkels
if (distance < circle1.radius + circle2.radius) {
    console.log("collision!")
}
```
De [vector class](vector.md) maakt het uitrekenen van afstanden tussen punten eenvoudiger.

<br>
<br>
<br>

## Collision met meerdere elementen

Bekijk de [Object Pool](./pool.md) tutorial voor collision checks met meerdere elementen.

<br>
<br>
<br>



# Links

- [MDN Docs collision](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [QuadTree : voor collisions tussen honderden objecten](https://github.com/timohausmann/quadtree-js)
- [Physics : voor botsing tussen complexe vormen (polygonen)](snippets/matter.md)
