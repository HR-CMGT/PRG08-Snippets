## Scrolling Background

CSS

```css
#background { 
    background-image: url('background.png');
    background-repeat: repeat;
}
```

Typescript

```typescript
loop(){
    xPos--;
    document.getElementById('background').style.backgroundPosition = xPos + 'px 0px';
}
```