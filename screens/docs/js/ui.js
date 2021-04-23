export class UI {
    constructor() {
        const game = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        game.appendChild(this.scoreField);
    }
    update() {
        this.scoreField.innerHTML = `Score: 10`;
    }
}
//# sourceMappingURL=ui.js.map