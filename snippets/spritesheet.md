# Spritesheets

Een [spritesheet](https://goo.gl/images/DAGCxu) is een afbeelding waarbinnen meerdere standen van je figuurtje staan.
In dit voorbeeld bevat **sheet.png** vier afbeeldingen van elk 100 pixels breed. Sheet.png is dus 400 pixels breed.
In de update functie springen we telkens naar het volgende frame.

CSS

```
#spritesheet { 
    background-image: url('sheet.png');
    background-repeat: no-repeat;
}
```

Typescript

```
class Player {
    frames = 4
    frame = 0
    framewidth = 100
    
    constructor(){
        this.frame = 0
        this.element = document.createElement("div")
        document.body.appendChild(this.element)
    }
    
    update(){
        frame++
        if(frame > frames) frame = 0
        let pos = 0 - (frame*framewidth)
        
        this.element.style.backgroundPosition = pos + 'px 0px';
    }
}
```
