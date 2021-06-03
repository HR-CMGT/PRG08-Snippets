# Debugging in VS Code

## Extension installeren

Klik op het 'extensions' icoon in VS Code en installeer de [Debugger for Chrome extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) van microsoft.

Start zoals gewoonlijk je project met CMD+SHIFT+B en start de `live-server` op je index.html.

## Configuratie

Kopieer deze debug instellingen naar het bestand `launch.json` in de map `.vscode`. 
Vul hier de localhost url van je live server in:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Fish debugger",
            "url": "http://localhost:5500/docs/",
            "webRoot": "${workspaceFolder}/docs/"
        }
    ]
}
```

## Debuggen

Klik op de PLAY button in het DEBUG venster in VS Code. Er wordt een nieuwe browser geopend die gelinkt is aan VS Code.

Je kan nu breakpoints zetten in VS Code en de status van variabelen bijhouden, terwijl je game runt in de browser. 

## Links

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
