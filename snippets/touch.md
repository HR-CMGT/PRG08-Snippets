# Touch events

Een touch listener toevoegen werkt hetzelde als click, mouse listeners. Als je de handler aanroept, kan je met `e as TouchEvent` het binnengekomen event interpreteren als TouchEvent.

```
let div = document.getElementById("div")

div.addEventListener("touchstart", (e) => this.onTouchStart(e as TouchEvent))
div.addEventListener("touchend", (e) => this.onTouchEnd(e as TouchEvent))
div.addEventListener("touchmove", (e) => this.onTouchMove(e as TouchEvent))
```

Een touch handler krijgt nu een `TouchEvent` binnen. Hierin zit een array van touches, omdat je met meerdere vingers tegelijk het scherm kan aanraken.

```
private onTouchStart(allTouches : TouchEvent) {
   // het touch event is een array van touches (multitouch support)
   // hier gebruiken we alleen de eerste touch
   let firstTouch: Touch = allTouches.targetTouches[0]
   console.log(firstTouch.clientX, firstTouch.clientY)
}
```

## Docs

- [MDN Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
