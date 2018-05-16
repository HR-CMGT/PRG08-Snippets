# Moving along a path

In dit voorbeeld bewegen we een element langs een SVG pad. Dit werkt doordat een SVG pad een X,Y positie kan teruggeven voor elk punt langs zijn eigen lengte.

**lengte van een pad**
```
let pathlength = svgpath.getTotalLength()
```

**x,y coördinaat op de helft van het pad**
```
let x = svgpath.getPointAtLength(0.5 * pathLength).x
let y = svgpath.getPointAtLength(0.5 * pathLength).y
```

## Voorbeeld

In onderstaande code vind je een SVG path dat wordt gestyled met CSS. In de typescript class vind je de code voor het opzoeken van het SVG element en
het bewegen langs het pad met `requestAnimationFrame`

### HTML
```
<div class="outerWrapper" id="outerWrapper">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="800px" height="300px" viewBox="0 0 800 300" enable-background="new 0 0 800 300" xml:space="preserve">

    <path d="M29.833,113.5C29.833,178.667,99,271.334,257,271.334 S475.5,81,375.5,81S305,271.334,770,271.334"/>

    <rect width="30" height="30" />
  </svg>
</div>
```

### CSS
```
.outerWrapper {
	width: 800px;
	height: 300px;
	position: relative;
}

.outerWrapper svg {
	position: absolute;
}

.outerWrapper svg path {
	fill:none; 
	stroke:#DABDD8;
	stroke-width:5; 
	stroke-dasharray:10,10;
}

.outerWrapper svg rect {
	fill:orange; 
  stroke-width:3;
  stroke:rgb(0,0,0);
}
```

### Typescript
```
class Game {
    /*	position 0 = start, position 1 = end */
    position: number = 0
    speed: number = 0.003
    pathLength : number
    player:Element
    path:any

    constructor() {
        let svgContainer = document.getElementById("outerWrapper")!;
        let ns = "http://www.w3.org/2000/svg";

        this.path = svgContainer.getElementsByTagNameNS(ns, "path")[0];
        this.player = svgContainer.getElementsByTagName("rect")[0];

        this.pathLength = this.path.getTotalLength();

        this.movePlayer()
    }

    movePlayer() {
        this.position += this.speed;

        /*	switch direction if we reach start or end */
        if (this.position > 1 || this.position < 0) {
            this.speed *= -1
        }

        let x = this.path.getPointAtLength(this.position * this.pathLength).x - 15
        let y = this.path.getPointAtLength(this.position * this.pathLength).y - 15

        this.player.setAttribute("transform", `translate(${x}, ${y})`)

        requestAnimationFrame(()=>this.movePlayer())
    }
}
```
