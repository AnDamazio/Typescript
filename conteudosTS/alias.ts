type StrOrNum = string|number 

let sample: StrOrNum; // <- Type alias | Anotação de tipo
sample = '123';
sample =  123;

function foo(sampleParameter: {}):Object {
    return sampleParameter
}

console.log(foo({barra: 5000, sacola: "De plástico"}));
