import { GameObject } from "./gameobject.js";
import { Robot } from "./robot.js";
export class Gamescreen extends GameObject {
    constructor(game) {
        super();
        const gameElement = document.querySelector('game');
        this.element = document.createElement("gamescreen");
        gameElement.appendChild(this.element);
        this.game = game;
        this.robot = new Robot();
    }
    update() {
        if (this.robot.getPosition() > window.innerWidth) {
            this.robot.remove();
            this.game.changeScreen("end");
        }
        else {
            this.robot.update();
        }
    }
}
//# sourceMappingURL=gamescreen.js.map