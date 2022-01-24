// class Foo {
//     foo: number; //some member whose type we want to capture
// }

// let  beb: Foo['foo']; // `beb` has type `number`

// // Purely to capture type (class type)
// declare let _foo: Foo;

// // Same as before (foo atributte from a object Foo)
// let fooa: typeof _foo.foo

// //Capturinmg the type of magic  strings
// const bob = "Hello World";

// //Use the captured type
// let fee: typeof bob;

// // fee can only ever be assigned to `Hello World`
// fee = "Hello World";
// //fee = "anything else"; //Error!

// //fee has the literal type "Hello World"

// /**********
//  * 
//  * Capturing Key names
//  * 
//  * *************/

// const colors = {
//     red: 'reddish',
//     blue: 'bluish',
//     raluco: 'pink'
// }

// type Colors = keyof typeof colors;
  
// let color: Colors; // same as let color: "red" | "blue"
// color = 'red'; // okay
// color = 'blue'; // okay
// color = 'raluco'; //okay
// //color = 'anythingElse 
// // Error: Type '"anythingElse"' is not assignable to type '"red" | "blue" | "pink'