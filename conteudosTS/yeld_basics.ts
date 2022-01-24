// function * add() {
//     const num = yield; //primeira parada
//     yield 2 + /*pausa o código no sinal de mais*/ num; 
//     yield 4 + num;
// }

// var generator = add();

// /**
//  * A função next() joga o parâmetro que receber exatamente onde o código parou
//  */

// // console.log(generator.next())
// // console.log(generator.next(-2))

// function* outer() {
//     yield () => {};
//     yield* inner(); //Faz com que a função percorra todos os itens dentro do iterador inner
//     yield 2;
// }

// function* inner() {
//     yield "a";
//     yield "b";
//     yield "c";
// }

// let switcher = outer();

// console.log(switcher.next())
// console.log(switcher.next())
// console.log(switcher.next())
// console.log(switcher.next())
// console.log(switcher.next())





