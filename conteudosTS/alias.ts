type StrOrNum = string|number 

let sample: StrOrNum; // <- Type alias | Anotação de tipo
sample = '123';
sample =  123;

function food(sampleParameter: {}):Object {
    return sampleParameter
}

console.log(food({barra: 5000, sacola: "De plástico"}));
