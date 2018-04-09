# Canvas

Een Canvas is vergelijkbaar met een enkele afbeelding, waarvan je de pixels gaat manipuleren. De performance hiervan is veel beter dan het manipuleren van DOM elementen. Canvas leent zich daarom goed voor games met veel visuele effecten en animaties. Plaats een canvas element in de html pagina: `<canvas id="canvas" width="400" height="200"></canvas>`.

Je hebt een referentie naar de **rendering context** nodig om te kunnen tekenen. Die referentie haal je op via het canvas element:
```
let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas')
let context : CanvasRenderingContext2D = canvas.getContext("2d")
```
Als je de context hebt kan je in de canvas gaan tekenen:
```
context.clearRect()
context.fillStyle = 'green'
context.fillRect(0,0,100,100)  
```

## Animatie

Voor animatie heb je een game loop nodig. Elk frame update je de coördinaten van je game elementen, en daarna teken je de hele canvas opnieuw. 

```
this.x = 0
this.y = 0
requestAnimationFrame(() => this.update())

private update():void {
    context.clearRect()
    
    this.x++
    this.y++

    context.fillRect(this.x, this.y, 100 ,100)  

    requestAnimationFrame(() => this.update())
}
```

## Spritesheets

Handgetekende of pre-rendered animaties kan je tonen met een spritesheet. Dit is vergelijkbaar met een .gif animatie, maar met hogere kwaliteit (een .gif heeft maar 256 kleuren). Je afbeelding bestaat uit een reeks frames. Je begint met het inladen van de PNG in het geheugen:
```
this.image = new Image()
this.image.src = './images/sakuraspritesheet.png'
```

In je Game Loop moet je bijhouden welk frame je wil tekenen. Met een framecounter kan je uitrekenen welke rij en kolom uit je PNG afbeelding als sprite getekend moet worden. In dit voorbeeld zijn er 16 frames verdeeld over 4 kolommen en 4 rijen.
```
currentframe++
if(currentframe > 15) currentframe = 0

// rij en kolom afleiden uit frame. 
let column : number = currentframe % 4
let row : number = Math.floor(currentframe/4)
```

Vervolgens kan je het juiste frame in de canvas tekenen:
```
// positie van de sprite in het canvas
let posx:number = 200
let posy:number = 0

// pixel positie van je frame binnen de spritesheet png
let framex:number = 200 * column
let framey:number = 212 * row

// tekenen in canvas
context.drawImage(this.image, framex, framey, 200, 212, posx, posy, 200, 212)
```

## Links

- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Canvas Drawing Tutorials](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Canvas Animation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [Spritesheets with Texture Atlas files](http://www.typescriptgames.com/TextureAtlas.html)