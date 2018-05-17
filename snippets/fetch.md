# Data ophalen met Fetch

**Fetch** is een native browser method om data van een API te laden

```
class Game {
    constructor(){
        fetch("https://swapi.co/api/people/1")
            .then(res => res.json())
            .then(res => this.dataLoaded(res))
    }

    dataLoaded(res:any) {
        console.log(res)
    }
}
```

Om Fetch te gebruiken moet je deze **lib** opties toevoegen aan de compiler options in je `tsconfig.json` file:

```
{
    "compilerOptions": {
        "lib": [
            "es2015",
            "dom"
        ]
    }
}
```

## JSON in Typescript

Typescript kan voor je checken welke inhoud je JSON data heeft. Dit doe je door een `interface` te definiëren voor je data. In dit voorbeeld maken we voor `Actor` en `Movie` een interface. Een Actor heeft een name, height en een array van movies.

```
interface Actor {
  name:string
  height:number
  movies:Movie[]
}

interface Movie {
  title:string
}
```

Nu kan je aangeven dat het JSON resultaat van het type Actor is:
```
let jsonresult:Actor = {
	name: "Luke Skywalker",
	height: "172",
	movies: [
		{title: "The Force Awakens"},
		{title: "Return of the Jedi"}
	]
}

console.log(jsonresult.name)
console.log(jsonresult.films[0].title)
```
