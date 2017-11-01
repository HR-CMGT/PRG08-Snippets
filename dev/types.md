## Type definitions

Als je met externe libraries of data werkt waarin nog geen Typescript support is opgenomen, dan herkent je werkomgeving niet automatisch de data types. Je krijgt dan geen intellisense / code completion, en daarmee dus ook geen controle op fouten. 

## Definition file downloaden

Frameworks zoals Vue en React hebben al typescript definition files ingebouwd. Voor javascript libraries die dit niet hebben kan je een definition file downloaden van [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). Je editor herkent automatisch `...d.ts` files.

## Definition file maken

Voor je eigen libraries en data kan je zelf een declaration file maken. Als je JSON data van een API haalt, dan krijg je daarvoor ook code completion in je editor!

### Voorbeeld : types aanmaken voor JSON data

We gaan data ophalen van de [Star Wars API](https://swapi.co). Maak een bestand genaamd `starwars.d.ts`. We gebruiken `declare type` om aan te geven dat we deze types alleen gebruiken voor code completion in de IDE tijdens development (in tegenstelling tot het werken met `interface`)

*[API result](https://swapi.co/api/people/1/)*
```
{
	"name": "Luke Skywalker",
	"height": "172",
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/"
	]
}
```

*starwars.d.ts*
```
declare type Person {
    name:string
    height:string
    films:string[]
}
```

*Gebruiken in IDE*
```
personLoaded(p:Person){
   let name = p.name   // typing p. gives autocompletion
}
```
## Voorbeeld Matter.js

De definition file van matter.js geeft uitgebreide uitleg voor alle types on mouse hover.

![bestanden](../docs/images/def1.png "Bestanden")
![completion](../docs/images/def2.png "Completion")

## Links

- [Type definition files op GitHub](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Type definition files via NPM install](https://www.npmjs.com/~types)
- [TSconfig opties](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
