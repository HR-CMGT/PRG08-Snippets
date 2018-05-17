# State manager

We kunnen classes gebruiken als container voor de state van de game. De game update de state. De state update alle elementen van die state.

**Game**

De Game class heeft een property `state` van het type `State`. 
```
class Game {
   state:State
   constructor() {
       this.state = new Playing(this)
   }
   gameLoop(){
       state.update()
   }
   switchState(s:State){
       this.state = s
   }
}
```

**interface**

De verschillende States implementeren een interface zodat je in Game het `State` type kan gebruiken.
```
interface State {
    update():void
}
```

**Playing**
```
class Playing implements State {
   car:Car
   game:Game
   constructor(g:Game) {
       this.game = g
       this.car = new Car()
   }
   update(){
       this.car.update()
   }
}
```

**GameOver**

In dit voorbeeld springt de GameOver state meteen weer terug naar de playing state.
```
class GameOver implements State {
   game:Game
   constructor(g:Game) {
       this.game = g
       console.log("game over!")
   }
   update(){
       this.game.switchState(new Playing(this.game))
   }
}
```


