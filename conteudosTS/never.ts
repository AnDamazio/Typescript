interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle';
    radius: number;
    
}

class Circla implements Circle {
    kind: 'circle'
    radius: number
    constructor(radius: number){
        this.radius = radius;
    }
}

let obj1:Circle
obj1 = {
    kind: 'circle',
    radius: 18
}
console.log(obj1)

type Shape = Square | Rectangle | Circle;
function area(s:Shape) {
    if(s.kind ==="square") {
        return s.size * s.size
    } else if (s.kind === 'rectangle') {
        return s.width*s.height;
    } else if (s.kind === 'circle') {
        return Math.PI * (s.radius ** 2);
    }
    const _ensureAllCasesAreHandled: never = s;
}

let never:never

console.log(area(obj1))
console.log(never)
