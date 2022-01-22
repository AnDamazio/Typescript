function* infiteSequence(func:Function) {
    func();
    yield
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed')
    yield 1;
    console.log('Execution resumed')

}
let iterator = infiteSequence(() => {console.log('Starting Interation')});

//Cuidado kkk
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

