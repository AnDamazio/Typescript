interface iteratorResult<T> {
    done: boolean;
    value: T;
}

/**
     * Uma interface não possui a estrutura de seus métodos,
     * apenas o nome e tipo dos parâmetros e o tipo do retorno.
     * O método precisa ser definido na classe ou no objeto que extender a interface.
     */

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

class Component {
    //Define que um objeto Component precisa receber um name do tipo string como parâmetro
    constructor (public name: string) {}
}

class Frame implements Iterator<Component> {
    //Ward
    private pointer = 0;

    constructor(public name: string, public components: Component[]) {}

    /**
     * Cria um objeto com a interface do IteratorResult
     * que vai pertencer à classe Component.
     */
    public next(): IteratorResult<Component> {
        if(this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            }         
        } else {
            return {
                done: true,
                value: null
            }
        }

    }
}

let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
console.log(frame.next());
console.log(frame.next());
console.log(frame.next());
console.log(frame.next());
console.log(frame.next());