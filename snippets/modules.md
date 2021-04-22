# Modules

Modules zorgen ervoor dat je code niet bereikbaar is van buitenaf. Ook zorgt het ervoor dat alleen code in je project terecht komt die je ook echt gebruikt.
In de nieuwste browsers kan je modules los inladen als .js file. 

```html
<script type="module" src="js/game.js"></script>
```
Nu kan je vanuit game.js je overige code inladen met het `import` keyword:

**game.ts**
```typescript
import { Car } from "./car.js"

class Game {
   constructor(){
      let c = new Car()
   }
}
```
**car.ts**

```typescript
export class Car {

}
```
Let op dat je een `.js` file importeert, omdat dit live uitgevoerd wordt, nadat je code van typescript is omgezet naar javascript.
De code van `car` wordt dus ook pas ingeladen op het moment dat je game een `car` nodig heeft!

---

<br>
<br>
<br>

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
