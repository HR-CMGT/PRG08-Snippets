# State manager

We kunnen classes gebruiken als container voor de state van de game. De game update de state. De state update alle elementen van die state.

**Game**

De Game class heeft een property `state`, daarin kunnen we de `Playing` of de `GameOver` state opslaan. Game heeft ook een fucntie waarmee we wisselen van State. Let op dat deze functie meteen de DOM leeg gooit, zodat er geen DOM elementen van de vorige state meer in de document.body aanwezig zijn.

```typescript
class Game {
   state:State
   constructor() {
       this.state = new Playing(this)
   }
   gameLoop(){
       state.update()
   }
   switchState(s:State){
       document.body.innerHTML = ""
       this.state = s
   }
}
```
**interface**

De verschillende States implementeren een interface zodat je in Game het `State` type kan gebruiken.
```typescript
interface State {
    update():void
}
```

**Playing**

De playing class maakt de game elementen zoals een Car. De Car maakt een DOM element.
In dit voorbeeld roepen we de `switchState()` functie van game aan, zodra `car.crashed()` true terug geeft.

```typescript
class Playing implements State {
   car:Car
   game:Game
   constructor(g:Game) {
       this.game = g
       this.car = new Car()
   }
   update(){
       this.car.update()
       
       if(this.car.crashed()){
           this.game.switchState(new GameOver(this.game))
       }
   }
}
```

**GameOver**

Dit is de GameOver state die door Playing aan Game wordt doorgegeven.
```typescript
class GameOver implements State {
   game:Game
   constructor(g:Game) {
       this.game = g
       console.log("game over!")
   }
   update(){
       
   }
}
```

*noot*

In `switchState()` in `Game.ts` maken we de hele document.body leeg, maar het is handiger om een game container element te hebben, dat je telkens leeg kan maken. 

Let ook op dat als je `window.addEventListener` of `setTimeout` *in* een state hebt staan, dat je die verwijdert voordat je wisselt van state. Dit kan je doen met `removeEventListener` en `clearTimeout`.

<br>

- [Zie ook het Screens voorbeeld onder Speed Courses](https://github.com/hr-cmgt/cle-speedcourses)


