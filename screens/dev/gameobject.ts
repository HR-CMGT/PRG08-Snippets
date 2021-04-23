export class GameObject {

    protected element: HTMLElement

    constructor(name:string){
        const gameElement = document.querySelector('game') as HTMLElement
        this.element = document.createElement(name)
        gameElement.appendChild(this.element)
    }

    public remove() {
        this.element.remove()
    }

    public update() {

    }
}