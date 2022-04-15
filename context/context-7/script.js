// 7) Напишите функцию getMax(fn, num), которая принимает функцию и число num. 
// Функция getMax должна возвращать функцию, которая при каждом вызове увеличивает свой внутренний счетчик (counter++). 
// Если счетчик больше числа num, внутренняя функция должна возвращать строку «Максимум!»,


function add(a, b) {
	return a + b
}

function getMax(fn, num) {
	let counter = 0;

	return function () {
		counter++;
		if (counter > num) {
			return 'Максимум!';
		}
		return fn.apply(this, arguments);
	};

}

var addOnlyThreeTimes = getMax(add, 3);
console.log(addOnlyThreeTimes(1, 2)) // 3
console.log(addOnlyThreeTimes(2, 2)) // 4
console.log(addOnlyThreeTimes(1, 2)) // 3
console.log(addOnlyThreeTimes(1, 2)) // "Максимум!"


