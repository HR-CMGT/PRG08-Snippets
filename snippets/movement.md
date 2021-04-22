# Character movement

## Event Listeners

[Gebruik de **arrow** notatie](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) voor Event Listeners.
```typescript
window.addEventListener("keydown", (e:KeyboardEvent) => this.move(e))
```

<br>
<br>

## Character movement

⚠️ Je kan niet rechtstreeks on **keydown** en **keyup** het karakter verplaatsen. Dat zorgt namelijk voor een schokkerige beweging, omdat die events niet gelijkmatig binnen komen.

We gebruiken de events om de snelheid van het karakter met een variabele aan te passen.

```typescript
class Fish {
    private xspeed : number = 0
    private yspeed : number = 0
    private x : number = 0
    private y : number = 0

    constructor(){
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }
    
    public update(){
        this.x += this.xspeed
        this.y += this.yspeed
    }
    
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT" :
                this.xspeed = -5
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 5
                break
            case "W":
            case "ARROWUP" :
                this.yspeed = -5
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT" :
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}
```

<br>

# Links

- [MDN Keyboard Event](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- [In plaats van het toetsenbord kan je een game controller gebruiken](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)