# Namespaces

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

# Modules

Het concept van modules is afkomstig uit [node.js](https://nodejs.org/api/modules.html). Modules zijn bedacht om makkelijk met [externe code](https://www.npmjs.com) te kunnen werken zonder risico op naming conflicts. 

In tegenstelling tot namespaces staan modules niet in de global scope. Modules worden de [standaard in Javascript](http://exploringjs.com/es6/ch_modules.html). 

Je hoeft geen `///reference` te gebruiken om aan te geven waar je bestanden staan.

### import en export

**Modules maken**

```
export class Message {      
    constructor(str:string) {
        console.log("testing modules");
    }
}
```

**Modules importeren**

```
import { Message } from "./message";

export class App {
    constructor() {
        let demomessage = new Message("hello");
    }
}
```

**app starten**

```
import { App } from "./app";

window.onload = function() {
    let a = new App();
};
```

## Modules gebruiken in de browser

Browsers ondersteunen nog geen modules. Om je modules toch werkend te krijgen moet je je modules bundelen (en omzetten naar es5) met een **module bundler** óf je moet je modules at runtime inladen met een **module loader**. In beide gevallen moeten we eerst typescript omzetten naar javascript modules:

### Typescript omzetten naar losse .js files

**tsconfig.json**

Gebruik van commonjs modules aanzetten. Let op dat er geen outfile bij staat. Elke .ts file wordt een .js file in dezelfde folder.
```
{
    "compilerOptions": {
        "sourceMap":  true,
        "removeComments": true,
        "target":"es5",
        "module": "commonjs"
    }
}
```

### Javascript files bundelen

#### Browserify

Installeer browserify met `sudo npm install browserify -g` en test of het bundelen werkt door in de terminal te typen: `browserify dev/main.js -o docs/js/main.js`

Vervolgens voeg je de compile en build commando's toe aan de `scripts` tag in `package.json`. Package.json maak je aan met `npm init`.

```
"scripts": {
    "prebuild": "tsc",
    "build": "browserify dev/main.js -o docs/js/main.js"
}
```

Voer het build proces uit met `npm run build`. 

#### Webpack



# Runtime module loader

Het is ook mogelijk om je modules pas in te laden als je app in de client opgestart wordt. In plaats van een **module bundler** gebruik je dan een **module loader**.

Met `SystemJS` kan je je modules inladen zodra je app opgestart wordt in de client. In dit voorbeeld laden we alle modules in voordat de app start. Het is ook mogelijk om asynchroon losse modules in te laden op het moment dat je app de module nodig heeft.

**tsconfig.json**

Gebruik van systemJS modules aanzetten. Let op dat we nu es2016 als javascript versie kunnen gebruiken. We kunnen een enkele outfile aangeven waar alle modules in komen te staan. Het blijven echter wel modules omdat we geen webpack gebruiken. Daarom hebben we de module loader nodig.

```
{
    "compilerOptions": {
        "sourceMap":  true,
        "removeComments": true,
        "target":"es2016",
        "module": "system",
        "out": "docs/js/main.js"
    }
}
```

**SystemJS inladen**

De browser laadt system.js en je app. Vervolgens kan je in een script tag je app opstarten. Je hoeft geen window.eventListener("load") te gebruiken om je applicatie te starten.

```
<script src="js/system.js"></script>        // module loader
<script src="js/main.js"></script>          // bundled modules
<script>
   System.import('game').then(function(module){
      let g = new module.Game();
   })
</script>
```

## Links

- [Typescript namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
- [Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [Webpack](https://webpack.js.org)
- [Browserify](http://browserify.org)
- [SystemJS](https://github.com/systemjs/systemjs)
