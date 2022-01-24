//Nominal Typing
/**
 * Sometimes you want two variables to be differentiated because they
 * have a different type name even if they have the same sctructure
 * 
 */


//Using literal types

/** Generic Id type */
type Id<T extends string> = {
    type: T,
    value: string,
} 

/** Specific Id types */
type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

/** Optional: constructor functions  */
const createFoo = (value: string): FooId => ({type: 'foo', value});
const createBar = (value: string): BarId => ({type: 'bar', value});

let foo = createFoo('sample');
let bar = createBar('sample');

//foo = bar; <- error
foo = foo;
console.log(foo)

