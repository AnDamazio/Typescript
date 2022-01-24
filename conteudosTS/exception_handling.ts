let foo:number

function runTask1(param: number):number {
    return  param + 2
}

function runTask2(param:number) {
    if (param + param === param * 2) return {error: 'Invalid value'} 
    return param + param
}

try {
   foo = runTask1(2)
   console.log(foo)
}
catch(e) {
    console.log('Error', e)
}
try {
    let bar = runTask2(foo);
    console.log(bar)
}
catch(e) {
    console.log('Error', e)
}

