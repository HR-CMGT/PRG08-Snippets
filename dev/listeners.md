## Listeners

Gebruik de 'fat arrow' notatie om callbacks aan een listener toe te voegen:
```
class Test {
    constructor(){
        element.addEventListener(“click”, (e:MouseEvent) => this.doSomething(e));
        window.addEventListener("keydown", (e:KeyboardEvent) => this.doSomething(e));
    }

    public doSomething(e):void {
        //
    }
}
```

## Listeners verwijderen

Om een listener te verwijderen moet je de referentie naar de callback opslaan.
```
class Test {
    private callback:EventListener;

    constructor(){
        this.callback = (e:KeyboardEvent) => this.keyWasPressed(e);
        window.addEventListener("keydown", this.callback);
    }

    private keyWasPressed(e:KeyboardEvent):void {
        window.removeEventListener("keydown", this.callback);
    }
}
```

## Interval

Om een interval te verwijderen moet je de id van de interval opslaan.
```
class Test {
    private intervalId;
    constructor(){
        this.intervalId = setInterval(() => this.doSomething(), 300 );
    }

    public doSomething():void {
        clearInterval(this.intervalId);
    }
}
```

## Game character movement

Als je met keyboard events een karakter wil besturen, gebruik je de keydown en keyup events om de snelheid van het karakter aan te passen. Keydown geeft het karakter een snelheid in de richting van de toets. Keyup zet die snelheid op 0. [In plaats van het toetsenbord kan je een game controller gebruiken](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

```
class Fish {
    leftSpeed : number = 0;
    rightSpeed : number = 0;
    downSpeed : number = 0;
    upSpeed : number = 0;

    constructor(){
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }
    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 5;
            break;
        case 68:
            this.downSpeed = 5;
            break;
        case 87:
            this.leftSpeed = 5;
            break;
        case 83:
            this.rightSpeed = 5;
            break;
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    }
}
```

