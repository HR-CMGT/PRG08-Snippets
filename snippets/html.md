# Werken met HTML en CSS

## Semantische elementen

Geef je HTML tags de naam van hetgeen het uitbeeldt:

```html
<robot></robot>
<player></player>
<powerup></powerup>
```
Je kan deze met CSS vormgeven. Gebruik `display:block` zodat de elementen zich gedragen als een `<div>`. 

We gebruiken `position:absolute` omdat we met javascript de game elementen willen positioneren.

```css
robot, player, powerup {
    display:block;
    position:absolute;
}
```
<br>
<br>

## Afbeeldingen

In plaats van `<img>` tags te gebruiken is het praktischer om een element een achtergrond afbeelding te geven. Het is belangrijk om de hoogte en breedte ook mee te geven.

```css
robot {
    background-image: url('../img/robot.png');
    background-repeat: no-repeat;
    width: 80px;
    height: 125px;
}
```
Een achtergrond afbeelding kan je laten herhalen (`tiling`).

```css
background {
    background-image: url('../img/background.png');
    background-position: bottom center;
    background-repeat: repeat;
    width: 100vw;
    height: 100vh;
}
```
Omdat de afbeelding in CSS staat kan je deze makkelijk veranderen met een class. De class kan je via javascript toevoegen en verwijderen.
```css
.destroyedrobot {
    background-image: url('../img/destroyed.png');
}
```
```javascript
robotelement.classList.add('destroyedrobot')
```
<br>
<br>

## Positioneren

We gebruiken `transform` om een element te positioneren. Transforms gebruiken de GPU, dat is goed voor de performance van de game. 

```css
robot {
    transform: translate(20px, 50px);
}
```
```javascript
robotelement.style.transform = `translate(20px, 50px)`
```