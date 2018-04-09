## Collision detection

Je kan van een DOM element de bounding box opvragen met

```
let div : HTMLElement = document.getElementById("car")
let rectangle : ClientRect = div.getBoundingClientRect()
```

Een ClientRect heeft left, top, right, bottom, x, y, width, height. Deze kan je gebruiken om te zien of twee elementen overlappen.

## Collision

De formule voor het vergelijken van twee rechthoeken is:
```
function checkCollision(a: ClientRect, b: ClientRect) {
    return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
}
```

## Utils class

Door de formule in een static functie te zetten kunnen we overal in de game twee rechthoeken met elkaar vergelijken:
```
class Util {
    public static checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}

let hit:boolean = Util.checkCollision(rec1, rec2);
```

## Zelf coordinaten bijhouden

Als je niet werkt met DOM elementen, of de collision box is niet hetzelfde als de afmeting van het DOM element, dan moet je zelf de waarden bijhouden:

```
class GameObject{
    publix x:number;
    public y:number;
    public width:number;
    public height:number;
}
```
## Links

- [2D collision](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Bounding Box Property](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect)