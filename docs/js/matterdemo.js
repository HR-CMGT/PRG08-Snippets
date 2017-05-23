var Game = (function () {
    function Game() {
        this.setupMatter();
        this.addObjects();
    }
    Game.prototype.setupMatter = function () {
        this.engine = Matter.Engine.create();
        var render = Matter.Render.create({
            element: document.body,
            engine: this.engine
        });
        Matter.Engine.run(this.engine);
        Matter.Render.run(render);
    };
    Game.prototype.addObjects = function () {
        var boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
        var boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
        var circ = Matter.Bodies.circle(220, 120, 20);
        var ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
        Matter.World.add(this.engine.world, [boxA, boxB, circ, ground]);
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map