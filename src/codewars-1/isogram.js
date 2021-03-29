function isIsogram(str) {
	processedsStr = str.toLowerCase();
	let alredyExistes = [];
	let result = true;
	processedsStr = processedsStr.split("");
	for (const currentChar of processedsStr) {
		if (alredyExistes.includes(currentChar) === true) {
			console.log(
				`${currentChar} existed ${alredyExistes.includes(currentChar)}`,
			);
			result = false;
			break;
		} else {
			alredyExistes.push(currentChar);
		}
	}

	return result;
}

let final = isIsogram("zasdf");
console.log(final);
