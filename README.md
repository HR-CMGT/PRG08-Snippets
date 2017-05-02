# Snippets and Reading list
This is a repository for random code snippets, interesting reading materials, youtube channels, etc.

## Code Snippets

### Namespaces
Namespaces gebruik je om je code af te schermen van de global scope en om je code te organiseren:
```
// utils.ts
namespace Utils {
    export class Calculator {
        constructor(){
            console.log("I am a car");
        }
    }
}
```
Vanuit een andere namespace kan je de code benaderen met:
```
// game.ts
let calc:Calculator = new Utils.Calculator();
```
Als je werkt met nested namespaces kan je met `import` een shortcut maken:
```
import u = Game.Tools.Utils;
let calc:Calculator = new u.Calculator();
```

### Gulp
Als je meerdere taken wilt uitvoeren naast de tsc compiler, dan kan je werken met `npm` of `gulp`. In dit voorbeeld doen we `uglify` op de javascript file die door `tsc` is gegenereerd.
- Gooi tasks.json weg
- Druk op CMD+SHIFT+B. Je krijgt de vraag wat voor build task je wilt maken. Kies Gulp.

### Vector Math
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


## Reading List and cool stuff

- [Essential Javascript topics for 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)
- [dev.to Web Development Posts](https://dev.to)
- [The Coding Train - Youtube code exercises](https://www.youtube.com/user/shiffman)
- [Fun Fun Function Youtube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/)
- [Imperative vs. Declarative, Functional vs. Object-oriented and more Javascript Terminology](https://medium.freecodecamp.com/programming-mental-models-47ccc65eb334)
- [Experimenting with Speech Synthesis](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/)
- [GitHub Student Pack - free private repositories](https://education.github.com/pack)
