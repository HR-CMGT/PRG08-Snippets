## Collision detection

Je kan van een DOM element de [bounding box](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect) opvragen met

```
let div : HTMLElement = document.getElementById("car")
let rectangle : ClientRect = div.getBoundingClientRect()
```

## Rectangle Collision

De formule voor het vergelijken van twee rechthoeken is:
```
function checkCollision(a: ClientRect, b: ClientRect) {
    return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
}
```

## Circle collision

Als de afstand tussen de middelpunten van twee cirkels kleiner is dan de radius van de twee cirkels, dan is er een collision.

```
interface Circle {
    x:number
    y:number
    radius:number
}

let dx = circle1.x - circle2.x
let dy = circle1.y - circle2.y
let distance = Math.sqrt(dx * dx + dy * dy)

if (distance < circle1.radius + circle2.radius) {
    // collision detected!
}
```

De [vector class](vector.md) maakt het uitrekenen van afstanden tussen punten eenvoudiger.

## Zelf coördinaten bijhouden

Als je niet werkt met DOM elementen, of de collision box is niet hetzelfde als de afmeting van het DOM element, dan moet je zelf de waarden bijhouden:

```
class GameObject{
    publix x:number
    public y:number
    public width:number
    public height:number
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