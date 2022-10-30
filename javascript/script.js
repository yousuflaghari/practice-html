// var let const
let integer = 10;
const floatVar = 10.2;
var arr = [1, "Hellow", 20.3];
var string = "Yousuf";
// var, let same
// const = constant : value cannot be changed

// object oriented programming

// Shape: triangle, square
class Shape {
	constructor(name, sides) {
		this.name = name;
		this.sides = sides;
	}
	getName() {
		console.log(this.name);
	}
	getSides() {
		
	}
	getArea() {
		
	}
}

var triangle = new Shape("triangle", 3);
var square = new Shape("Square", 4);
triangle.getName();
square.getName();

console.log(Math.PI);

// Object

const car = {
	name: 'Honda',
	model: 2022,
	getName: function () {
		console.log(this.name);
	}
};

car.name = "Toyota";

console.log(car.name);
console.log(car['name']);
// [] brackets, {} curly brackets, () parathesis, <> angle brackets
var x = 'name';

console.log	(car[x])

var receipt = {
	coke: 0,
	sting: 0,
	sprite: 0,
};

function addReceipt() {
	
}


var p = document.getElementById("res");

p.innerHTML = "Yousuf";