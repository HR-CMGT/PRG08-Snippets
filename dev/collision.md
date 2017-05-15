## Collision detection

Door de x, y, breedte en hoogte van twee game objecten bij te houden, kan je zien of ze elkaar raken.
Met inheritance geven we elk game object die waarden.

```
class GameObject{
    publix x:number;
    public y:number;
    public width:number;
    public height:number;
}

class Bubble extends GameObject {

}
```

## Formule

De formule voor het vergelijken van twee rechthoeken is:
```
if (obj1.x < obj2.x + obj2.width &&
   obj1.x + obj1.width > obj2.x &&
   obj1.y < obj2.y + obj2.height &&
   obj1.height + obj1.y > obj2.y) {
        // bubble collision detected!
}
```

## Utils class

Door de formule in een static functie te zetten kunnen we overal in de game twee rechthoeken met elkaar vergelijken:
```
class Util {
    public static checkCollision(go1:GameObject, go2:GameObject):boolean {
        return (go1.x < go2.x + go2.width &&
                go1.x + go1.width > go2.x &&
                go1.y < go2.y + go2.height &&
                go1.height + go1.y > go2.y)
    }
}

// util aanroepen:
let obj1 = new Bubble();
let obj2 = new Bubble();
let hit:boolean = Util.checkCollision(obj1, obj2);
```

## DOM Bounding Box

Het is ook mogelijk om de positie van DOM elementen in het browservenster op te vragen:
```
var rect:ClientRect = obj.getBoundingClientRect();

// de positie staat in het rect object:
rect.left;
rect.top;
rect.bottom;
rect.right;
rect.width;
rect.height;
```

## Links

- [2D collision](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Bounding Box Property](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect)