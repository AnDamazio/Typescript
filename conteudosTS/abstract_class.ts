abstract class FooCommand {
    a:number
    b:number

    constructor(a?: number, b?: number) {
        this.a = a;
        this.b = b;
    } 

    abstract execute(): string;
}

class BarCommand extends FooCommand {

    execute(): string {
        return `Funciona`
    }
}

class BarCommand2 extends FooCommand {
    
    constructor(a:number, b:number) {
        super()
        this.a = a
        this.b = b
    }

    execute(): string {
       return this.a + this.b.toString()
    }

}

let BarCommand3 = new BarCommand2(2, 2)

console.log(BarCommand3.execute())

// Cannot create an instance of an abstract class, only extends
// const fooCommand: FooCommand = new FooCommand(); <- erro

//você pode criar uma instância de um classe filho que extende a classe abstrata
//o filho de uma classe abstrata não pode acessar seus métodos
//um método vazio terá que ser criado na classe abstrata e implementado na filha
const barCommand = new BarCommand();

console.log(barCommand.execute())
