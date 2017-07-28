## Een startproject clonen

- Je kan in [week 0 van PRG 4](https://github.com/HR-CMGT/PRG04-Week0) een leeg startproject vinden met alle instellingen voor VS Code.

## Zelf een startproject maken 

- Maak een DEV en een DOCS folder.
- In DOCS plaats je je HTML + CSS + JS bestanden.
- In DEV plaats je je .ts files
- Maak een `tsconfig.json` file met onderstaande settings

## tsconfig.json

Dit bestand bepaalt hoe je typescript wordt gecompileerd naar Javascript, en hoe streng je code op fouten wordt gecontroleerd. 

```
{
    "compilerOptions": {
        "sourceMap":  true,
        "removeComments": true,
        "target":"es6",
        "strict": true,
        "watch": true,
        "outFile": "docs/js/main.js"
    },
    "exclude": [
        "node_modules",
        "docs"
    ]
}

```

## Compileren

- Je kan in de terminal `tsc -p` typen om de compiler te starten. De compiler start in **watch mode** (`watch:true` in `tsconfig.json`). Je kan in VS Code ook op CMD+SHIFT+B drukken om dit commando uit te voeren. 

## Editor settings

- Auto Save on window change: **preferences > settings >** `"files.autoSave": "onWindowChange"` 
- Verander `CMD + S` naar `Save All`. Open **preferences > keyboard shortcuts**.

## Lokaal werken met git

Je kan [lokaal werken met git](git.md) om versies en branches in je project te kunnen bijhouden: typ `git init` in de terminal om een repository te starten. Je kan nu je wijzigingen bijhouden via commits en werken in branches.

## Links

- [Opties voor tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Tasks in VS Code](https://code.visualstudio.com/docs/editor/tasks)
- [Lokaal werken met git](git.md) 