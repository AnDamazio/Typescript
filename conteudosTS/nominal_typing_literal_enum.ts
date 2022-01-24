// // FOO
// enum FooIdBrand {_ = ""};
// type FooId = FooIdBrand & string;

// type Teste = 123 & "aaa"
// let teste: Teste;
// let teste2 = true as Teste
// console.log(teste2)

// // BAR
// enum BarIdBrand {_ = ""};
// type BarId = BarIdBrand & string;

// /**
//  * Usage Demo
//  */
// let fooId: FooId;
// let barId: BarId;

// // Safety!
// //fooId = barId; <- error
// //barId = fooId; <- error

// //Newing up
// fooId = '123' as FooId;
// barId = 'bar' as BarId;

// let str: string;
// console.log(str = fooId)
// console.log(str = barId)

