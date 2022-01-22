let deepEqual = require('deep-equal');

// Deep check

//"type" Cria um tipo de objeto/variável
type IdDisplay = {
    id: string,
    display: string
}

const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo select'
    },
    {
        id: 'foo',
        display: 'Foo select'
    }
]

console.log(deepEqual({a:123}, {a:123}))
const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex)