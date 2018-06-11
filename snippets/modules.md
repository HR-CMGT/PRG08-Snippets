# Modules

Door classes of namespaces in de global scope te definiëren loop je het risico dat je code overschreven of aangeroepen wordt terwijl dat niet de bedoeling is. Door modules te gebruiken maak je een scope die niet van buitenaf te benaderen is.

Externe code van `npmjs.com` installeren ook modules: `npm install...`. Deze modules komen terecht in de `node_modules` folder.

Via webpack of een andere module loader kan je je modules inladen in de browser.

**car.ts**

```
export default class Car {

}
```

**game.ts**
```
import Car from "./car"

export default class Game {
   constructor(){
      let c = new Car()
   }
}
```

Een bijkomend voordeel van modules is dat code die nergens wordt geïmporteerd, ook niet meegecompileerd wordt. 

### Naam van de class

Bij `import` bepaal je de naam van een default class, dus bij `export` kan je die weglaten, maar dat is wel minder leesbaar.

```
export default class {
}
import Car from './filename'
```

# Modules laden

## Native modules

In de nieuwste browsers kan je modules los inladen als .js file. Je moet dan nog wel je `.ts` files naar losse `.js` files omzetten.

```
<script type="module" src="js/car.js"></script>
<script type="module" src="js/game.js"></script>
```

## Webpack

Met webpack kan je typescript modules bundelen naar een `bundle.js` file.
```
<script src="js/bundle.js"></script>
```
In `package.json` komen de externe modules terecht die je
In 

```
npm install webpack --save-dev
npm install typescript ts-loader --save-dev

webpack --watch
```

**webpack.config.js**

```
module.exports = {
    entry: "./dev/main.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'docs/js/bundle.js'
    }
};
```
 - [Korte oefening met webpack en modules](https://github.com/HR-CMGT/PRG08-Week7-Webpack)
 - [Uitgebreide oefening](https://github.com/HR-CMGT/PRG08-Week7-oefening1)

## Parcel

[Parcel](https://parceljs.org/getting_started.html) gebruikt je `package.json` als settings file. Parcel genereert je hele docs folder, inclusief HTML, images en CSS.
Dat betekent dat al je werkbestanden in de DEV folder staan. In HTML kan je typescript laden. Parcel snapt dat dit javascript moet worden:

```
<script src='./ts/index.ts'></script>
```

Via `import` kan je afbeeldingen en css meecompileren

```
import '../style/style.css'
``` 

### Installeren

```
npm install -g parcel-bundler typescript
npm run watch
```
package.json
```
{
  "name": "testparcel",
  "version": "1.0.0",
  "description": "",
  "main":"index.html",
  "scripts": {
    "prebuild": "rm -rf dist/*",
    "start": "parcel src/index.html",               
    "watch": "parcel watch src/index.html --public-url ./",
    "build": "parcel build src/index.html --public-url ./"
  },
  "devDependencies": {
    "typescript": "^2.6.2"
  }
}
```

## Dynamic modules

Met een **dynamic import** wordt je module pas geladen op het moment dat de gebruiker deze nodig heeft. Je moet dan wachten tot de module geladen is voordat je er iets mee kan doen, daarvoor gebruik je `async await`.

**Static import**
```
import widget from "./widget"

function renderWidget() {
    widget.doSomething()
}
```

**Dynamic import**
```
async function renderWidget() {
    const widget = await import("./widget")
    widget.doSomething()
}
```

## Links

- [Oefening](https://github.com/HR-CMGT/PRG08-Week7-oefening1)
- [Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [Parcel](https://parceljs.org/getting_started.html)
- [Parcel tutorial](https://alligator.io/tooling/parcel/)
- [Webpack](https://webpack.js.org)
- [Webpack en Typescript](https://webpack.js.org/guides/typescript/)
- [Dynamic imports deel 1](https://blog.mariusschulz.com/2018/01/14/typescript-2-4-dynamic-import-expressions) en [deel 2](https://blog.mariusschulz.com/2018/01/14/code-splitting-with-import-typescript-and-webpack)
