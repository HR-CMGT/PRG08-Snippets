import { GameObject } from "./gameobject.js"
import { Startscreen } from "./startscreen.js"
import { Endscreen } from "./endscreen.js"
import { Robot } from "./robot.js"

export class Game {

    private objectPool:GameObject[] = []

    constructor(){
        this.showStartScreen()
        this.gameLoop()
    }

    public showStartScreen(){
        this.removeAllObjects()
        this.objectPool.push(new Startscreen(this))
    }

    public showEndScreen() {
        this.removeAllObjects()
        this.objectPool.push(new Endscreen(this))
    }

    public showGameScreen() {
        this.removeAllObjects()
        this.objectPool.push(new Robot(this), new Robot(this), new Robot(this))
    }

    private gameLoop(){
        for (let o of this.objectPool) {
            o.update()
        }
        requestAnimationFrame(()=>this.gameLoop())
    }

    private removeAllObjects() {
        for (let o of this.objectPool) {
            o.remove()
        }
        this.objectPool = []
    }
}

new Game()