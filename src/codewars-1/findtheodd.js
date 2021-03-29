function findOdd(A) {
	let processed = {};

	let unique = new Set(A);
	//processed = A.sort((a, b) => a - b);
	let allreadyCounted = {};
	for (const current of unique) {
		processed[current] = 0;
		for (const curInA of A) {
			if (current === curInA) {
				processed[current] += 1;
			}
		}
	}
	//processed = Object.values(processed).sort((a,b)=>a-b);
	let oddFinded;
	for (const currentKey in processed) {
		if (Object.hasOwnProperty.call(processed, currentKey)) {
			const element = processed[currentKey];
			if (element % 2 !== 0) {
				oddFinded = currentKey;
			}
		}
	}

	return oddFinded;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
