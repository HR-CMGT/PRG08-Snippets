import { GameObject } from "./gameobject.js";
export class Startscreen extends GameObject {
    constructor(game) {
        super("startscreen");
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(btn);
        text.innerText = "Click that Robot!";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => game.showGameScreen());
    }
}
//# sourceMappingURL=startscreen.js.map