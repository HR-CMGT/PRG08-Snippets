## Vector Math
Een Vector2 is een object met een x en y waarde en een aantal methods voor het berekenen van coordinaten / richting van een gameobject.
```
let v1 = new Vector2(20,35);
let v2 = new Vector2(100,120)

// add two vectors
v1 = v1.add(v2);

// calculate the difference
let diff = v1.difference(v2);

// calculate the magnitude (the distance between 0,0 and the vector).
let v3 = new Vector2(100,100);
console.log(v3.magnitude()); // result 141.42135

// normalize the vector (calculate the direction of the vector)
console.log(v3.normalize());  // result 0.707106
```

## Rectangle collision
Een Rectangle is een object met een x,y positie (een Vector2) en een breedte en hoogte.
```
// Is vector 25,25 inside rectangle 20,20,100,100 ?
let r1:Rectangle = new Rectangle(new Vector2(20,20), 100, 100);
let v7:Vector.Vector2 = new Vector2(25,25);
            
let hit:boolean = r1.isInside(v7);

// Does rectangle 30,30,200,150 overlap rectangle 20,20,100,100 ?
let r2:Rectangle = new Rectangle(new Vector2(30,30), 200, 150);
let hit2 = r1.isOverlap(r2);
```
