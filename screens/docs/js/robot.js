import { GameObject } from "./gameobject.js";
export class Robot extends GameObject {
    constructor(game) {
        super("robot");
        this.x = Math.random() * 600;
        this.y = Math.random() * 450;
        this.game = game;
        this.element.addEventListener("click", () => this.game.showEndScreen());
    }
    update() {
        this.x += 3;
        if (this.x > window.innerWidth) {
            this.x = -100;
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=robot.js.map