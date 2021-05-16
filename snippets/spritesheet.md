# Spritesheets

Een [spritesheet](https://goo.gl/images/DAGCxu) is een afbeelding waarbinnen meerdere standen van je figuurtje staan.
Deze demo bevat een spritesheet van [Link](http://img09.deviantart.net/80ee/i/2017/040/7/c/link_sprite_sheet_by_tiozacdasgalaxias-dayh0s6.png) waarin hij stil staat met knipperende ogen, en in vier richtingen loopt.

De gehele afbeelding gebruiken we als background van een kleine DIV waarin slechts 1 afbeelding tegelijk zichtbaar is. Door de positie van de achtergrondafbeelding te verschuiven met `backgroundPosition` kunnen we steeds een andere link laten zien.

CSS

```css
player {
  border:2px solid red;
  display:block;
  width:100px;
  height:115px;
  background-repeat:no-repeat;
  background-image:url(http://img09.deviantart.net/80ee/i/2017/040/7/c/link_sprite_sheet_by_tiozacdasgalaxias-dayh0s6.png);
}
```

Typescript

```typescript
class Player {
    frames = 3
    frame = 0
    framewidth = 102
    speedcounter = 0
    
    constructor(){
        this.frame = 0
        this.element = document.getElementsByTagName("player")[0]!
        this.update()
    }
    
    update(){
        this.speedcounter++
        if(this.speedcounter%20 == 0) this.frame++

        if(this.frame >= this.frames) this.frame = 0

        let pos = 0 - (this.frame*this.framewidth)
        this.element.style.backgroundPosition = pos + 'px 0px'

        requestAnimationFrame(()=>this.update())
    }
}
```

## Links

- [CodePen demo Fish](https://codepen.io/eerk/pen/qBrNJNL?editors=0010)
- [CodePen demo Link](https://codepen.io/eerk/pen/ERYoZp?editors=0111)
