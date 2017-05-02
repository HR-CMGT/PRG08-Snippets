# Snippets and Reading list
This is a repository for random code snippets, interesting reading materials, youtube channels, etc.

## Code Snippets
- Namespaces
- Gulp
- Vector Math

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
Als je meerdere taken wilt uitvoeren naast de tsc compiler, dan kan je werken met `npm` of `gulp`. Als je nog geen gulp hebt, dan kan je dit eenmalig globaal installeren met `npm install gulp-cli -g`. Daarna installeer je gulp in je projectmap met `npm install gulp -D`. In Visual Studio Code kan je dan je `tasks.json` weg gooien. Als je vervolgens CMD+SHIFT+B doet, kan je kiezen voor het aanmaken van een gulpfile. Deze repository gebruikt een [gulpfile](gulpfile.js) die `uglify` doet op de javascript file die door `tsc` is gegenereerd.

Let op dat je `node_modules` in [.gitignore](.gitignore) plaatst, anders worden je node modules ook in je git repository geplaatst.

### Vector Math
Een Vector is een object met een x en y waarde en een aantal methods voor het berekenen van coordinaten / richting van een gameobject.
Check de [readme file](dev/vector/) voor code voorbeelden.




## Reading List and cool stuff

- [Essential Javascript topics for 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)
- [dev.to Web Development Posts](https://dev.to)
- [The Coding Train - Youtube code exercises](https://www.youtube.com/user/shiffman)
- [Fun Fun Function Youtube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/)
- [Imperative vs. Declarative, Functional vs. Object-oriented and more Javascript Terminology](https://medium.freecodecamp.com/programming-mental-models-47ccc65eb334)
- [Experimenting with Speech Synthesis](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/)
- [GitHub Student Pack - free private repositories](https://education.github.com/pack)
