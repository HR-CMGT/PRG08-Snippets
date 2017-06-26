# Debugging in VS Code

## Extension installeren

Klik op het 'extensions' icoon in VS Code en zoek de 'Debugger for Chrome' extension van microsoft. Installeer deze extension.

![install_debugger](docs/images/install_debugger.png)

## Configuratie

Kopieer deze debug instellingen naar het bestand `launch.json` in de map `.vscode`. Vul de localhost url van je project in.

```
{
    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "Lanceer Chrome",
            "url": "http://localhost/~Naam/project/docs/",
            "webRoot": "${workspaceRoot}"
        }
    ]
}
```

## Debuggen

Je kan nu breakpoints zetten en de status van variabelen bijhouden in VS Code, terwijl je game runt in de browser. Klik op de 'play' knop om de debugger te starten.

![debugger](docs/images/debugger.png)

## Links

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)