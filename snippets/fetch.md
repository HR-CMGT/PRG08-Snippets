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

Om Fetch te gebruiken moet je deze **lib** opties toevoegen aan je `tsconfig.json` file:

```
{
    "compilerOptions": {
        "strict": true,
        "target": "es5",
        "removeComments": true,
        "noUnusedLocals":true,
        "noUnusedParameters":true,
        "sourceMap": true,
        "outFile": "docs/js/main.js",
        "lib": [
            "es2015",
            "dom"
        ]
    },
    "include": [
        "dev/**/*"
    ]
}
```
