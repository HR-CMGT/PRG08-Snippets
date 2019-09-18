# Vector Math
Een Vector is een object met een x en y waarde:

### Voorbeeld
```typescript
let position:Vector2 = new Vector2(200,300)
div.style.transform = `translate(${position.x}px, ${position.y}px)`
```

## Vectoren vergelijken
Een vector heeft een aantal ingebouwde 'convenience methods'.
```typescript
let v1 = new Vector2(20,35)
let v2 = new Vector2(100,120)

// optellen
v1 = v1.add(v2)

// verschil tussen twee vectoren
let diff = v1.difference(v2)

// de lengte van deze vector
let v3 = new Vector2(100,100)
let distance = v3.magnitude()    // resultaat 141.42135
```

### Voorbeeld
```typescript
let position = new Vector2(200,300)
let speed = new Vector2(4,3)

// game loop
position = position.add(speed)
```

## Richting bepalen
Als een object in een bepaalde richting kan bewegen, dan is het erg handig om vectoren te gebruiken, in plaats van een rotatie uit te rekenen met degrees of radians. 

### Normalize
Normalize vertaalt een x,y snelheid naar een afstand die je aflegt met die snelheid.
```typescript
let position = new Vector2(300,200)
let speed = new Vector2(1,1)
let normalizedSpeed = speed.normalize()      // result 0.70710

// game loop
position = position.add(normalizedSpeed)
```

# Rectangle 
Een Rectangle is een object met een x,y positie (een Vector2) en een breedte en hoogte.
```typescript
let rect:Rectangle = new Rectangle(new Vector2(20,20), 100, 100)
```

## Rectangle collision
Een Rectangle heeft methods om te zien of er een collision is
```typescript
let r1:Rectangle = new Rectangle(new Vector2(20,20), 100, 100)
let v7:Vector.Vector2 = new Vector2(25,25)
let hit:boolean = r1.isInside(v7)

let r2:Rectangle = new Rectangle(new Vector2(30,30), 200, 150)
let hit2 = r1.isOverlap(r2)
```

## Vector class

```typescript
class Vector2 {
        
    public x : number
    public y : number
    
    constructor(x:number, y:number) {
        this.x = x
        this.y = y
    }

    // todo: methods static maken, nu worden ze telkens mee gekopieerd
    
    public add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y)
    }

    public difference(v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y)
    }

    public scale(n: number): Vector2 {
        return new Vector2(this.x * n, this.y * n)
    }

    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    
    // x en y delen door de lengte (magnitude) geeft normalized
    public normalize():Vector2 {
        let mag = this.magnitude()
        return new Vector2(this.x/mag, this.y/mag)
    }

    public static reflectX(point: Vector2, x: number) {
        return new Vector2(2 * x - point.x, point.y)
    }

    public static reflectY(point: Vector2, y: number) {
        return new Vector2(point.x, 2 * y - point.y)
    }
}
```

## Rectangle class

```typescript
class Rectangle {
            
    public position:Vector2
    public width:number
    public height:number
        
    constructor(p:Vector2, w:number, h:number) {
        this.position = p
        this.width = w
        this.height = h
    }
    
    // kijk of een punt binnen deze rectangle is
    isInside(point: Vector2): boolean {
        var difference = this.position.difference(point)
        return Math.abs(difference.x) < this.width/2 && Math.abs(difference.y) < this.height/2
    }
    
    // kijk of twee rectangles elkaar raken
    isOverlap(o2: Rectangle): boolean {
        var difference = this.position.difference(o2.position)
        return Math.abs(difference.x) < this.width/2 + o2.width/2 && Math.abs(difference.y) < this.height/2 + o2.height/2
    }

}
```

[Code voorbeeld voor Vector Movement](https://github.com/KokoDoko/VectorTanks)
