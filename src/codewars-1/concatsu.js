function checkConcatenatedSum(integer, multipler) {
	let processedInteger = Math.abs(integer);
	processedInteger = new String(integer).split("");
	let multipledString = [];
	for (const current of processedInteger) {
		multipledString.push(current.repeat(multipler));
	}

	console.log(multipledString);

	processedInteger = multipledString.reduce(
		(accumulator, curNum) => (accumulator += parseInt(curNum)),
		0,
	);
	if (processedInteger === integer) {
		return true;
	} else {
		return false;
	}
}

console.log(checkConcatenatedSum(198, 2));
