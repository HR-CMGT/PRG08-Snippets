# Snippets and Reading list
Dit is een repository voor random code snippets en links naar online materialen.
De snippets zijn verdeeld over folders met een eigen readme file.

## Inhoud
- Namespaces
- [Vector Math](dev/vector/)
- [Draggable items](dev/draggable/)
- Reading List

### Namespaces
Namespaces gebruik je om je code af te schermen van de global scope en om je code te organiseren:
```
// utils.ts
namespace Utils {
    export class Calculator {
        constructor(){
            console.log("I am a calculator");
        }
    }
}
```
Vanuit een andere namespace kan je de code benaderen met:
```
// game.ts
let calc:Calculator = new Utils.Calculator();
```
Je kan met `import` een shortcut maken:
```
import u = Game.Tools.Utils;
let calc:Calculator = new u.Calculator();
```

## Reading List

- [Essential Javascript topics for 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)
- [dev.to Web Development Posts](https://dev.to)
- [The Coding Train - Youtube code exercises](https://www.youtube.com/user/shiffman)
- [Fun Fun Function Youtube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/)
- [Imperative vs. Declarative, Functional vs. Object-oriented and more Javascript Terminology](https://medium.freecodecamp.com/programming-mental-models-47ccc65eb334)
- [Experimenting with Speech Synthesis](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/)
- [GitHub Student Pack - free private repositories](https://education.github.com/pack)
- [Gulp](http://gulpjs.com) in [VS Code](https://www.typescriptlang.org/docs/handbook/gulp.html)
- [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)