# Draggable

De draggable div gebruikt drie event listeners. De mouse move listener wordt aan window toegevoegd als je klikt op de div.
De mouse move listener wordt opgeslagen in een referentie, zodat je de listener later weer kan verwijderen.

```typescript
this.moveBind = (e: Event) => this.updatePosition(e)

this.htmlElement.addEventListener("mousedown", (e) => this.initDrag(e))
this.htmlElement.addEventListener("mouseup"  , (e) => this.stopDrag(e))  
```

### Start drag
- Move listener toevoegen aan window
- Default klik gedrag negeren
- Item bovenin de DOM zetten (zodat je nergens onderdoor sleept)
- Offset onthouden, dit is de afstand van de mouse pointer tot de linkerbovenhoek van het object

```typescript
 private initDrag(e: Event) : void {
    e.preventDefault()
    
    // HET ITEM HIER BOVENIN DE DOM ORDER ZETTEN, ANDERS KAN JE ONDER ANDERE ELEMENTEN SLEPEN - DAN WERKT DROP NIET
    this.htmlElement.parentElement.appendChild(this.htmlElement)     

    // offset verandert na elke klik op dit object
    this.offSetX = e.clientX - this.x
    this.offSetY = e.clientY - this.y  
    
    window.addEventListener("mousemove", this.moveBind)
}
```

## Update position
- Teken het object op de plek van de muis, als de muis beweegt

```typescript   
private updatePosition(e: Event): void {
            
    e.preventDefault()

    this.x = e.clientX - this.offSetX
    this.y = e.clientY - this.offSetY

    this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")"
}
```

## Stop drag
- Verwijder de mouse move listener

```typescript   
private stopDrag(e: Event) : void {
    window.removeEventListener("mousemove", this.moveBind)
    e.preventDefault()
}
```
