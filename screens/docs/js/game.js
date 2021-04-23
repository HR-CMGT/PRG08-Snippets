import { Startscreen } from "./startscreen.js";
import { Endscreen } from "./endscreen.js";
import { Robot } from "./robot.js";
export class Game {
    constructor() {
        this.objectPool = [];
        this.showStartScreen();
        this.gameLoop();
    }
    showStartScreen() {
        this.removeAllObjects();
        this.objectPool.push(new Startscreen(this));
    }
    showEndScreen() {
        this.removeAllObjects();
        this.objectPool.push(new Endscreen(this));
    }
    showGameScreen() {
        this.removeAllObjects();
        this.objectPool.push(new Robot(this), new Robot(this), new Robot(this));
    }
    gameLoop() {
        for (let o of this.objectPool) {
            o.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    removeAllObjects() {
        for (let o of this.objectPool) {
            o.remove();
        }
        this.objectPool = [];
    }
}
new Game();
//# sourceMappingURL=game.js.map