//Classes Emit

function Point(x:number, y:number) {
    this.x = x;
    this.y = y
}

Point.prototype.add = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
};



function Animal() {}
Animal.prototype.walk = function() {console.log('walk')};

let animal = new Animal();

animal.walk();


