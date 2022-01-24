//Say you have something that has a generic parameter e.g a class Foo;

class Foo<T> {
    foo: T;
}

// let FooNumber = Foo as { new ():Foo<number>};

class FooNumber extends Foo<number>{}

function id<T>(x: T) {return x;}

const idNum = id as {(x:number):number}

const idNum2 = id as {(x: number):number}

const idNum3 = id as {(x:number):number}

function pi<T>(x: T) {return typeof x}

const idPi = pi as {(x: number)} 
const idPi2 = pi as {(x: 2)} 
console.log(idPi(2))
console.log(idPi2(2))
