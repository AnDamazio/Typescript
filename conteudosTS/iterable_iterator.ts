class Component {
    constructor (public name: string) {}
}

class Frame implements IterableIterator<Component> {
    
    constructor(public name: string, public components: Component[]) {}

    
        private pointer = 0;

            next(): IteratorResult<Component> {
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

            [Symbol.iterator](): IterableIterator<Component> {
                return this
            }
    }



let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
console.log(frame.next())
console.log(frame.next())
console.log(frame.next())
console.log(frame.next())
console.log(frame.next())
