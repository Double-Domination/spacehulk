function highAndLow(numbers) {
	let arrSplitted = numbers.split(" ");
	arrSplitted.sort((a, b) => {
		return a - b;
	});

	let min = arrSplitted[0];
	let max = arrSplitted[arrSplitted.length];

	return `${max} ${min}`;
}

function highAndLow(numbers) {
	numbers = numbers.split(" ");
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
