# Namespaces
Namespaces gebruik je om je classes af te schermen van de global scope en om je code te organiseren:
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

Vanuit **dezelfde namespace** kan je de code benaderen met:
```
let calc:Calculator = new Calculator();
```

Vanuit een **andere namespace** kan je de code benaderen met:
```
let calc:Calculator = new Utils.Calculator();
```

Je kan met `import` een shortcut maken:
```
import u = Game.Tools.Utils;
let calc:Calculator = new u.Calculator();
```

# Modules
Namespaces staan zelf nog wel steeds in de global scope. Eigenlijk zijn het objecten waarbinnen je je classes definieert. Als je met modules werkt, wordt je code helemaal anoniem. Modules moet je in je code importeren met het `import` keyword, anders zijn ze niet beschikbaar. 

[Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
