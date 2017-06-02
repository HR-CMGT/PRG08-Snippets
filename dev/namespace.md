## Namespaces
Namespaces in Typescript helpen je om je classes te organiseren. Je kan namespaces eenvoudig aan je code toevoegen met het `namespace` en `export` keyword. Een namespace in Typescript is eigenlijk gewoon een parent object waarbinnen je child objecten aanmaakt. In dit voorbeeld plaatsen we de parents `Utils` en `Demo` boven de child `Calculator`. Dit geeft je tevens de mogelijkheid om twee verschillende classes 'Calculator' te hebben, zonder naming conflict. 

```
namespace Utils {
    export class Calculator {
        constructor(){
            console.log("I am an utils calculator");
        }
    }
}

namespace Demo {
    export class Calculator {
        constructor(){
            console.log("I am a demo calculator");
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
            let calc = new Calculator(); // dit is Utils.Calculator omdat we in de Utils namespace zijn
        }
    }
}
```

**andere namespace**
```
namespace Game {
    export class Test {
        constructor(){
            let utilCalc = new Utils.Calculator();
            let demoCalc = new Demo.Calculator();
        }
    }
}
```

## Modules
Het concept van modules is afkomstig uit [node.js](https://nodejs.org/api/modules.html). Modules zijn bedacht om makkelijk met [externe code](https://www.npmjs.com) te kunnen werken zonder risico op naming conflicts. In tegenstelling tot namespaces staan modules niet in de global scope. Modules worden de [standaard in Javascript](http://exploringjs.com/es6/ch_modules.html). De typescript compiler genereert modules als je de `export` en `import` modules gebruikt. Je hebt in de client nog een library nodig die de modules inlaadt! In dit voorbeeld wordt `SystemJS` gebruikt om modules te laden en de app te starten.

Gebruik van modules aanzetten in tsconfig.json
```
{
    "compilerOptions": {
        "module": "system",
    }
}
```

Een module maken van je class met het `export` keyword:

```
export class Message {      
    constructor(str:string) {
        console.log("testing modules");
    }
}
```

Modules kan je overal in je code gebruiken met het `import` keyword:

```
import { Message } from "./message";

export class App {
    constructor() {
        let demomessage = new Message("hello");
    }
}
```

**SystemJS inladen**

In de browser moet je de system-production.js file laden, en daarin kan je aangeven dat SystemJS je app moet starten. 

- Je hoeft nu geen window.eventListener("load") meer te gebruiken om je applicatie te starten.
- Je hoeft nu geen `///reference` meer te gebruiken. De compiler kan altijd elke module vinden.

```
<script src="js/system.js"></script>
<script>
    // get the anonymous scope
    System.import('js/main.js')
    .then(function() {
        // now we can get to the app and make a new instance
        System.import('app').then(function(m){
            let app = new m.App();
        })
    });
</script>
```

**Verschil met Javascript**

De **typescript** compiler kan modules automatisch bundelen naar een enkel .js bestand. Maar als je met **javascript** werkt, heb je hier een aparte bundler voor nodig, zoals Webpack of Browserify.

## Links

- [Typescript namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
- [Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [SystemJS](https://github.com/systemjs/systemjs)
