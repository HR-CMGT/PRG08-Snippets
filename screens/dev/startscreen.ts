import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class Startscreen extends GameObject {
    
    constructor(game:Game) {
        super("startscreen")
        
        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(btn)

        text.innerText = "Click that Robot!"
        btn.innerText = "START GAME"
        btn.addEventListener("click", () => game.showGameScreen())
    }

}