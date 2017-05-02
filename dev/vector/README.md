## Vector Math
Een Vector is een object met een x en y waarde en een aantal methods voor het berekenen van coordinaten / richting van een gameobject.
Check de [readme file](dev/vector/README.md)
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

// Rectangle collision
    <div><b>Collision</b><br>Is vector 25,25 inside 20,20,100,100 = true<br>Does rectangle 30,30,200,150 overlap 20,20,100,100 = true</div>

