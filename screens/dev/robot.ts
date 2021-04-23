import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class Robot extends GameObject {

    private x : number = Math.random() * 600
    private y : number = Math.random() * 450
    private game:Game

    constructor(game:Game){
        super("robot")
        this.game = game
        this.element.addEventListener("click", ()=>this.game.showEndScreen())
    }

    public update(): void{
        this.x += 3
        if(this.x > window.innerWidth) {
            this.x = -100
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}