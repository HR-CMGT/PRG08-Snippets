# Character movement

## Listeners

[Gebruik de **fat arrow** notatie](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) voor Event Listeners.
```
window.addEventListener("keydown", (e:KeyboardEvent) => this.move(e))
```

## Character movement

Als je met keyboard events een karakter wil besturen, gebruik je de keydown en keyup events om de snelheid van het karakter aan te passen. 

Keydown geeft het karakter een snelheid in de richting van de toets. Keyup zet die snelheid op 0. [In plaats van het toetsenbord kan je een game controller gebruiken](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

```
class Fish {
    leftSpeed : number = 0
    rightSpeed : number = 0
    downSpeed : number = 0
    upSpeed : number = 0

    constructor(){
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }
    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 5
            break
        case 68:
            this.downSpeed = 5
            break
        case 87:
            this.leftSpeed = 5
            break
        case 83:
            this.rightSpeed = 5
            break
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 0
            break
        case 68:
            this.downSpeed = 0
            break
        case 87:
            this.leftSpeed = 0
            break
        case 83:
            this.rightSpeed = 0
            break
        }
    }
}
```

