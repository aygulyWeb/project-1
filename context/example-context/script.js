// example-1

// function show() {
// 	console.log(this);
// }

// const person = {
// 	name: "Vasya",
// 	age: 25,
// 	showInfo: show
// }

// example-2

// const auto = {
// 	model: 'BMW',
// 	drive(speed) {
// 		console.log(`Заведем наш ${this.model} максимальная скорость ${speed} `)
// 	}
// }

// const chevrolet = {
// 	model: 'Lacetti',
// }
// const driveChevrolet = auto.drive.bind(chevrolet, 500);
// driveChevrolet()


// example-3

// const auto = {
// 	model: 'BMW',
// 	drive(speed, type) {
// 		console.log(`Заведем наш ${this.model} максимальная скорость ${speed} тип: ${type} `)
// 	}
// }

// const chevrolet = {
// 	model: 'Epica',
// }

// const driveChevrolet = auto.drive.call(chevrolet, 500, 'spotrcar');

// example-4

// const auto = {
// 	model: 'BMW',
// 	drive(speed, type) {
// 		console.log(`Заведем наш ${this.model} максимальная скорость ${speed} тип: ${type} `)
// 	}
// }

// const chevrolet = {
// 	model: 'Spark',
// }

// auto.drive.apply(chevrolet, [500, 'spotrcar']);

// example-5

// function show() {
// 	console.log(this)
// }
// let info = show.bind(Object);

// info();

// example-6

// function showFullName() {
// 	console.log(this.firstName, this.lastName)
// };

// let user = {
// 	firstName: 'Vasya',
// 	lastName: 'Петров'
// }

// let person = showFullName.bind(user)
// person();

// example-7

// function Auto(brand, price) {
// 	this.brand = brand;
// 	this.price = price
// }

// Auto.prototype.drive = function () {
// 	console.log(`Drive ${this.brand}`)
// }

// const chevrolet = new Auto('tico', 2000);
// const bmw = new Auto('BMW', 5000);

// example-8

// function Auto(brand, price) {
// 	this.brand = brand;
// 	this.price = price
// }

// Object.prototype.drive = function () {
// 	console.log(`Drive ${this.brand}`)
// }

// const chevrolet = new Auto('tico', 2000);
// const bmw = new Auto('BMW', 5000);

// example-9

const person = new Object({
	name: 'Vasya',
	age: 25,
	showInfo: function () {
		console.log(`${this.name} ${this.age}`)
	}
})

Object.prototype.test = function () {
	console.log('Test message')
}

const peter = Object.create(person);
peter.name = "Peter"