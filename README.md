# Typescript

Dit document bevat informatie voor de vakken CMTTHE01-4 en PRG01-8. 

## Werkomgeving

- Installeer [NodeJS](https://nodejs.org/en/) en [Typescript](https://www.typescriptlang.org)
- Installeer [Visual Studio Code](https://code.visualstudio.com)
- Download en test het [Typescript startproject](https://github.com/HR-CMGT/Typescript-startproject)

# Curriculum

Op N@Tschool vind je de modulewijzer en een quickstart guide.

### CMTTHE01-4 Jaar 1
- [Week 1 Objects](https://github.com/HR-CMGT/CMTTHE04-Week1-oefening1)
- [Week 2 Classes en Instances](https://github.com/HR-CMGT/CMTTHE04-Week2-oefening1)
- [Week 3 Encapsulation, Game Loop, Collision detection](https://github.com/HR-CMGT/CMTTHE04-Week3-oefening1)
- [Week 4 Composition](https://github.com/HR-CMGT/CMTTHE04-Week4-oefening1)
- [Week 5 Inheritance](https://github.com/HR-CMGT/CMTTHE04-Week5-oefening1)
- [Week 6 Objecten verwijderen](https://github.com/HR-CMGT/CMTTHE04-Week6-oefening0), [Oefening composition](https://github.com/HR-CMGT/CMTTHE04-Week4-lesvoorbeeld) en [Oefening advanced](https://github.com/HR-CMGT/CMTTHE04-Game-Bas)
- [Week 7 Herhaling](https://github.com/HR-CMGT/CMTTHE04-Week7-oefening1)
- [Week 8 Oefententamen]()
- [Voorbeeld inleverdocument peer review](inleverdocument4.md)

### PRG01-8 Jaar 2
- [Week 1 Herhaling OOP](https://github.com/HR-CMGT/PRG08-Week1-oefening1)
- [Week 2 Singleton](https://github.com/HR-CMGT/PRG08-Week2-oefening1)
- [Week 3 Strategy](https://github.com/HR-CMGT/PRG08-Week3-oefening1)
- [Week 4 Polymorphism](https://github.com/HR-CMGT/PRG08-Week4-oefening1)
- [Week 5 Observer](https://github.com/HR-CMGT/PRG08-Week5-oefening0) en [oefening](https://github.com/HR-CMGT/PRG08-Week5-oefening1)
- Week 6
- [Week 7 Oefening](https://github.com/HR-CMGT/PRG08-Week7-oefening1)
- Week 8 Herhaling
- [Voorbeeld inleverdocument praktijktentamen](inleverdocument8.md)

## Game programming in Typescript

- [Game Loop met GameObjects](snippets/game.md)
- [Een GameObject verwijderen](snippets/remove.md)
- [Character movement](snippets/movement.md)
- [Collision detection](snippets/collision.md)
- [Scrolling background](snippets/scrolling.md)
- [Spritesheet](snippets/spritesheet.md)
- [Moving along a path](snippets/path.md)
- [Vector](snippets/vector.md)
- [Events](snippets/events.md)
- [Using Web Components to build a game](https://github.com/KokoDoko/game-custom-elements)
- [Drag and drop](snippets/drag.md)
- [Namespaces](snippets/namespace.md)
- [Modules](snippets/modules.md)
- [Matter Physics Basics](snippets/matter.md)
- [Debugging in VS Code](snippets/debug.md)
- [State Manager](snippets/state.md)

## Libraries en API's

- [Socket.io Multiplayer](https://socket.io)
- [Lance Multiplayer Server](http://lance.gg)
- [SAT.JS : collision detection for complex shapes](https://github.com/jriecken/sat-js)
- [QuadTree : large scale collision detection](https://github.com/timohausmann/quadtree-js)
- [Particle Engine](https://vincentgarreau.com/particles.js/)
- [RPG Conversation Tree](https://github.com/google/bottery)
- [Touch Gestures Library](https://hammerjs.github.io)
- [Matter 2D physics](http://brm.io/matter-js/)
- [Planck 2D physics](http://piqnt.com/planck.js/Car)
- [SVG Vector drawing](http://svgjs.com)
- [AI / Deep Learning](https://deeplearnjs.org)
- [GamePad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Greensock Tweening](https://greensock.com)
- [Multithreading in Javascript](https://keithwhor.github.io/multithread.js/)
- [Dependency Injection](https://www.npmjs.com/package/container-ioc)
- [Data laden met Fetch](snippets/fetch.md)
- [Boardgame.io](http://boardgame.io/#/) - build a boardgame in Javascript
- [Phaser 3 Typescript](https://github.com/digitsensitive/phaser3-typescript)
- [Build Flappy Bird in 5 minutes with Phaser and Typescript](https://medium.com/@digit.sensitivee/learn-to-create-a-html5-game-in-5-minutes-604118f5d0ab) en [Source code](https://github.com/digitsensitive/phaser3-flappy-bird)

## Graphics

- [Open Game Art](https://opengameart.org/)
- [Kenny.nl](http://kenney.nl/)
- [Spriters Resource](https://www.spriters-resource.com/)
- [Retro Game Zone](https://retrogamezone.co.uk/)
- [Assets Forge](http://assetforge.io/) - maak 2D sprites op basis van building blocks

## Audio

- [Voorbeeld audio tag en Howler](snippets/audio.md)
- [Howler Documentation](https://howlerjs.com)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)	
- [Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Synthesizer API](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)

## Canvas/WebGL

- [Canvas en Spritesheets](snippets/canvas.md)
- [Pixi Canvas Basics](snippets/pixi.md)
- [Canvas 2D manager](http://www.pixijs.com)
- [Isometric graphics engine](http://jdan.github.io/isomer/)
- [Canvas 3D animatie](https://threejs.org)
- [AR for ThreeJS](https://github.com/jeromeetienne/AR.js)
- [Canvas 2D animatie](http://createjs.com)

## Type definitions

Om javascript libraries te gebruiken in een typescript project heb je Type Definitions nodig. Dit zijn `.d.ts` files. Er staan een aantal voorbeelden in [deze repository](https://github.com/HR-CMGT/Typescript/tree/master/definitions). Je kan type definitions ook via `npm` downloaden:

`npm install @types/libraryname`
