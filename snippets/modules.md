# Modules

Door classes of namespaces in de global scope te definiëren loop je het risico dat je code overschreven of aangeroepen wordt terwijl dat niet de bedoeling is. Door modules te gebruiken maak je een scope die niet van buitenaf te benaderen is:

**car.ts**

```typescript
export default class Car {

}
```

**game.ts**
```typescript
import Car from "./car"

export default class Game {
   constructor(){
      let c = new Car()
   }
}
```

Een bijkomend voordeel van modules is dat code die nergens wordt geïmporteerd, ook niet meegecompileerd wordt. 

# Modules laden

## Native modules

Door je `.ts` files naar losse `.js` files te compileren, kan je ze rechtstreeks als module inladen in de browser

```html
<script type="module" src="js/car.js"></script>
<script type="module" src="js/game.js"></script>
```

## Webpack

Met webpack kan je typescript modules bundelen naar een `bundle.js` file.
```html
<script src="js/bundle.js"></script>
```

```
npm install webpack --save-dev
npm install typescript ts-loader --save-dev

webpack --watch
```

**webpack.config.js**

```javascript
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
## Parcel

[Parcel](https://parceljs.org/getting_started.html) gebruikt je `package.json` als settings file. Parcel genereert je hele docs folder, inclusief HTML, images en CSS.
Dat betekent dat al je werkbestanden in de DEV folder staan. In HTML kan je typescript laden. Parcel snapt dat dit javascript moet worden:

```html
<script src='./ts/index.ts'></script>
```

Via `import` kan je afbeeldingen en css meecompileren

```js
import '../style/style.css'
``` 

### Installeren

```
npm install -g parcel-bundler typescript
npm run watch
```
package.json
```json
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

## Links

- [Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [Parcel](https://parceljs.org/getting_started.html)
- [Parcel tutorial](https://alligator.io/tooling/parcel/)
- [Webpack](https://webpack.js.org)
- [Webpack en Typescript](https://webpack.js.org/guides/typescript/)
