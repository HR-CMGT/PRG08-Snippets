# Namespaces

Namespaces in Typescript helpen je om je classes te organiseren. In dit voorbeeld plaatsen we de `Calculator` class in de `Utils` namespace.

```
namespace Utils {
    export class Calculator {
        constructor(){
            console.log("I am an utils calculator");
        }
    }
}
```
Als je een calculator instance wil maken, dan maakt het uit vanuit welke namespace je dit doet:

**dezelfde namespace**
```
namespace Utils {
    export class Test {
        constructor(){
            let calc = new Calculator()
        }
    }
}
```
**andere namespace**
```
namespace Game {
    export class Test {
        constructor(){
            let calc = new Utils.Calculator()
        }
    }
}
```

## Links

- [Typescript namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)