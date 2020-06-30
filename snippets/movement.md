# Character movement

## Listeners

[Gebruik de **fat arrow** notatie](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) voor Event Listeners.
```typescript
window.addEventListener("keydown", (e:KeyboardEvent) => this.move(e))
```

## Character movement

Gebruik je de **keydown** en **keyup** events van **window** om de snelheid van het karakter aan te passen. 

Keydown geeft het karakter een snelheid in de richting van de toets. Keyup zet die snelheid op 0. [In plaats van het toetsenbord kan je een game controller gebruiken](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

```typescript
class Fish {
    xspeed : number = 0
    yspeed : number = 0

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

