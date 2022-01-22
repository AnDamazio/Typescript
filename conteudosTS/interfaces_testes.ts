
//Uma interface não pode conter métodos pré-definidos, apenas a "estrutura" deles
interface calc<T> {
    num: T
    imprime(value: number): number
}

//Classe que será enviada como parâmetro
class Numero {
    constructor(public value:number){}
}

class impressora implements calc<Numero> {

    constructor (public num: Numero){}

    imprime(): number {
        return 1 + this.num.value
    }
}

let teste = new impressora(new Numero(2))
console.log(teste.imprime())