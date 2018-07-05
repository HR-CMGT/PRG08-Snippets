# Audio

## HTML5 Audio Tag

Plaats een of meerdere audio tags in je HTML file
```
<audio src="./sound/crank.wav"></audio>
```
Vervolgens kan je via typescript de source aanpassen en het geluid afspelen:
```
this.sound = document.getElementsByTagName("audio")[0]

this.sound.src = "./sound/crank.wav"
this.sound.play()
```
Let op dat een mobiele site alleen geluid mag afspelen na een gebruikersinteractie, bijvoorbeeld nadat je in de game op een start knop hebt geklikt.

## Werken met de Howler library

Plaats de [Howler library](https://howlerjs.com) in een script tag
```
<script src="./js/howler.js"></script>
```
Installeer de Typescript definities via
```
npm install @types/howler
```
Het is ook mogelijk om [het definitie bestand los te downloaden](https://github.com/HR-CMGT/Typescript/blob/master/definitions/howler.d.ts) en in je map te zetten, als je verder geen node modules gebruikt.

Plaats je geluiden in een `sounds` folder. In je game maak je sound objecten aan met:

```
let mysound = new Howl({
    src: ['sounds/217.mp3'],
    loop: false
});
```
Op het moment dat je een geluid wil spelen doe je
```
mysound.play()
```
[Howler docs](https://github.com/goldfire/howler.js#quick-start)

//
