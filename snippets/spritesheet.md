# Spritesheets

Een [spritesheet](https://goo.gl/images/DAGCxu) is een afbeelding waarbinnen meerdere standen van je figuurtje staan.
In dit voorbeeld bevat de [Link spritesheet](http://img09.deviantart.net/80ee/i/2017/040/7/c/link_sprite_sheet_by_tiozacdasgalaxias-dayh0s6.png) op de eerste rij drie afbeeldingen van link die met zijn ogen knippert.

In de update functie verschuiven we de achtergrondafbeelding van de div telkens 100 pixels naar links. Daardoor krijg je een animatie effect.

[Voorbeeld op CodePen](https://codepen.io/eerk/pen/ERYoZp?editors=0111)

CSS

```
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

```
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
