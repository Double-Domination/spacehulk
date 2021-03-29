function divCon(x) {
	let pseudoStr = [];
	let pseudoNum = [];
	let result;

	for (const current of x) {
		if (typeof current === "number") {
			pseudoNum.push(current);
		} else {
			pseudoStr.push(current);
		}
	}
	// values distributed in two arrays
	console.log(pseudoNum);
	console.log(pseudoStr);
	// Calculate part of values which can be auto processed
	let arrLengthDiff = pseudoNum.length - pseudoStr.length;
	console.log(arrLengthDiff);
	//-=FOR DEBAG PURPOSES=-
	//arrLengthDiff=-2
	let autoSumm = 0;
	switch (true) {
		case arrLengthDiff >= 0:
			//pseudoNumArr is longer than pseudoStr 5 for example
			//arrLengthDiff *= -1;
			console.log(arrLengthDiff);

			autoSumm = pseudoNum.splice(arrLengthDiff);
			//swap two arrays
			let tmpArrSwap = [...autoSumm];
			autoSumm = [...pseudoNum];
			pseudoNum = [...tmpArrSwap];
			// Reducing sliced part
			autoSumm = autoSumm.reduce(
				(accum, current) => (accum += current),
				0,
			);
			console.log(autoSumm);
			result = substractDigitByDigit(pseudoNum, pseudoStr, autoSumm);
			break;

		case arrLengthDiff < 0:
			//pseudostrArr in longer than pseudonum -3 foe example

			console.log(pseudoNum);
			console.log(pseudoStr);
			console.log(autoSumm);
			arrLengthDiff = Math.abs(arrLengthDiff);
			//arrLengthDiff = 1;
			console.log(arrLengthDiff);

			autoSumm = pseudoStr.splice(arrLengthDiff);
			console.log(pseudoNum);
			console.log(pseudoStr);
			console.log(autoSumm);
			//swap two arrays
			let tmpArrSwap2 = [...autoSumm];
			autoSumm = [...pseudoStr];
			pseudoStr = [...tmpArrSwap2];

			console.log(pseudoNum);
			console.log(pseudoStr);
			console.log(autoSumm);
			// Reducing sliced part
			autoSumm = autoSumm.reduce(
				(accum, current) => (accum -= parseInt(current)),
				0,
			);
			console.log(autoSumm);
			result = substractDigitByDigit(pseudoNum, pseudoStr, autoSumm);

			break;

		default:
			console.log("no matches");
			break;
	}

	console.log(pseudoNum);
	console.log(pseudoStr);
	console.log(autoSumm);

	function substractDigitByDigit(pseudoNum, pseudoStr, autoSumm) {
		let result = 0;
		while (pseudoNum.length !== 0) {
			let lastElPseudoNum = pseudoNum.pop();
			let lastElPseudoStr = pseudoStr.pop();
			let currentSubstraction = lastElPseudoNum - lastElPseudoStr;
			result += currentSubstraction;
		}

		result += autoSumm;
		return result;
	}

	function substractDigitByDigitNegative(pseudoNum, pseudoStr, autoSumm) {
		let result = 0;
		while (pseudoNum.length !== 0) {
			let lastElPseudoNum = pseudoNum.pop();
			let lastElPseudoStr = pseudoStr.pop();
			let currentSubstraction = lastElPseudoNum - lastElPseudoStr;
			result += currentSubstraction;
		}

		result += autoSumm;
		return result;
	}

	console.log(result);
	return result;
}

divCon([9, 2, "7", "3", "4", "2", 1]);
