// 8) Напишите функцию sumEvenArguments, которая принимает все аргументы, 
// переданные ей при вызове, и возвращает сумму четных чисел (из числа аргументов).

function sumEvenArguments() {

	let summa = 0;
	let num = [].slice.call(arguments);

	for (let i = 0; i < num.length; i++) {
		if (num[i] % 2 === 0) {
			summa += num[i];
		}

	}

	return summa;
};


console.log(sumEvenArguments(1, 2, 3, 6))// 8
console.log(sumEvenArguments(1, 12, 6)) // 18
console.log(sumEvenArguments(1, 2)) // 2

// ваш код
