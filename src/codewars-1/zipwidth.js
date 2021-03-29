function zipWith(fn, a0, a1) {
	// make lenths equal
	let minArrayLength = Math.min(a0.length, a1.length);
	//console.log(minArrayLength);
	//and copy valuesto prevent modifications
	let firstArr = [...a0];
	let secondArr = [...a1];

	firstArr.length = minArrayLength;
	secondArr.length = minArrayLength;

	//console.log(a0);
	//console.log(a1);
	//results storage
	const result = [];

	for (let i = 0; i < firstArr.length; i++) {
		let curA0 = firstArr[i];
		let curA1 = secondArr[i];
		let curResult = fn(curA0, curA1);
		result.push(curResult);
	}
	console.log(result);
	return result;
}

console.log(
	zipWith(
		(firstArg, secondArg) => firstArg + secondArg,
		[1, 2, 3, 4, 5],
		[5, 3, 2],
	),
);
