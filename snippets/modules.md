# Modules

Door classes of namespaces in de global scope te definiëren loop je het risico dat je code overschreven of aangeroepen wordt terwijl dat niet de bedoeling is. Door modules te gebruiken maak je een scope die niet van buitenaf te benaderen is:

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

# Modules laden

## Native modules

Door je `.ts` files naar losse `.js` files te compileren, kan je ze rechtstreeks als module inladen in de browser

```
<script type="module" src="js/car.js"></script>
<script type="module" src="js/game.js"></script>
```

## Webpack

Met webpack kan je typescript modules bundelen naar een `bundle.js` file.
```
<script src="js/bundle.js"></script>
```

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
## Parcel

[Parcel](https://parceljs.org/getting_started.html) is een nieuwe bundle tool die werkt met typescript en die geen configuratie file nodig heeft. Parcel bundelt ook je CSS en HTML file, en genereert daarmee je hele docs folder.

```
npm install -g parcel-bundler
parcel docs/main.ts
```


## Links

- [Typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [Parcel](https://parceljs.org/getting_started.html)
- [Webpack](https://webpack.js.org)
- [Webpack en Typescript](https://webpack.js.org/guides/typescript/)
