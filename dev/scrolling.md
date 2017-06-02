## Scrolling Background

CSS

```
#background { 
    background-image: url('background.png');
    background-repeat: repeat;
}
```

Typescript

```
loop(){
    xPos--;
    document.getElementById('background').style.backgroundPosition = xPos + 'px 0px';
}
```