function squares(x, n) {
	if (n <= 0) {
		return [];
	}
	let sequence = [];
	sequence.push(x);

	while (n > 1) {
		let lastElement = sequence[sequence.length - 1];
		console.log(lastElement);
		lastElement **= 2;
		sequence.push(lastElement);
		n--;
	}

	return sequence;
}

console.log(squares(3, 3));
