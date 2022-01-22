class Numeral {
    public sucessor:number; 
    public antecessor:number; 

    constructor(public numero: number){
        this.sucessor = numero + 1;
        this.antecessor = numero - 1;
    }

    
}

interface calculo<T> {
    done: boolean
    value: T,
}

interface calculadora {
    next(): calculo<Numeral>
}

class Resultado implements calculadora {
    public point = 0;

    constructor(public calculos: Numeral[]){}

    next(): calculo<Numeral> {
        
        if(this.point < this.calculos.length) {
            
            return {
                done: false,
                value: this.calculos[this.point++]
            }
        } else {
            return {
                done: true,
                value: undefined
            }
        }
    }
    
}

let teste_ = new Resultado([new Numeral(1), new Numeral(2), new Numeral(3), new Numeral(20)])

console.log(teste_.next());
console.log(teste_.next());
console.log(teste_.next());
console.log(teste_.next());
console.log(teste_.next());