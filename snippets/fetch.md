# JSON en Fetch in Typescript

**Fetch** is een native browser method om data van een API te laden

```typescript
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

Variant met `async await`

```typescript
class Game {
  
    constructor(){
        this.loadJSON("https://swapi.co/api/people/1/")
    }
  
    async loadJSON(url:string) {
        let response = await fetch(url)
        let json = await response.json()
        console.log(json)
    }
}

```

Om Fetch te gebruiken moet je deze **lib** opties toevoegen aan de compiler options in je `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "lib": [
            "es2015",
            "dom"
        ]
    }
}
```

## Types voor JSON data

Om te voorkomen dat je data het type `any` heeft kunnen we aangeven dat het over een Actor gaat, en dat die Actor een name, height en een aantal films heeft:

**JSON**
```json
{
	"name": "Luke Skywalker",
	"height": 172,
	"movies": [
		{"title": "The Force Awakens"},
		{"title": "Return of the Jedi"}
	]
}
```

Dit doe je door een `interface` te definiëren voor je data. In dit voorbeeld maken we voor `Actor` en `Movie` een interface. Een Actor heeft een name, height en een array van movies.

```typescript
interface Actor {
  name:string
  height:number
  movies:Movie[]
}

interface Movie {
  title:string
}
```

**callback**

Nu kan je in `dataloaded` aangeven dat deze JSON van het type Actor is. 
```typescript
dataLoaded(res:Actor) {
    console.log(res.name)
    console.log(res.films[0].title)
}
```

En in de `async` variant kan je nu zeggen:
```typescript
let json:Actor = await response.json()
```
