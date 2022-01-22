import * as _ from 'lodash';

async function hello() {
    return 'Hello'
}

let lucky = 23;

//Define duas opções de valores
type Style = 'bold' | 'italic';

let font: Style = 'bold';

interface Person {
    first: string;
    last: string;
    [key: string]: any //Permite que outros valores sejam adicionados além dos que a interface permite
}

const person2: Person = {
    first: 'Usain',
    last: 'Bold',
    height: 23,
    heighta: 23
}

console.log(person2)

function pow(x: number, y: number): number {
    return Math.pow(x, y);
}

function powString(x: number, y: number): string {
    return Math.pow(x, y).toString();
}


/**
 * Tupla
 * Basicamente é um array de elementos com tipos pré definidos,
 * embora possa receber qualquer um desde que seja previamente declarado,
 * como no exemplo abaixo:
 *  */
type MyList = [number?, string?, boolean?]

//Arrays

const arr: MyList = []

arr.push(1)
arr.push(2)
arr.push('oi')
arr.push(true)

console.log(arr)

// Generics

class Observable<T> {
    constructor(public value: T) {

    }
}

let teste = new Observable(23)

let x: Observable<number>


console.log(x, teste)

//JQuery, observações:

//faz com o que o JQuery funcione

// declare var $: {
//     (selector:string): any;
// };

// $('.incrivel').show();


class Point {
    constructor(public x: number, public y: number) {
    }

    //Método que recebe como parâmetro um objeto de mesma classe
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

let p1 = new Point(0, 1);
let p2 = new Point(100, 200);

let p3 = p1.add(p2)

console.log(p3)