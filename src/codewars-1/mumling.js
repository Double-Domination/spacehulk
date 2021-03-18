function reductor(stringToReduce) {
	stringToReduce = stringToReduce.toLowerCase();
	let accArray = []; //empty array
	splittedStr = stringToReduce.split(""); //split initial string by single lettters

	function mumlingReducer(
		prevous,
		currentValue,
		arrCurrentIndex,
		currentArrayName,
	) {
		for (let i = 0; i <= arrCurrentIndex; i++) {
			if (i === 0) {
				prevous += currentValue.toUpperCase();
			} else {
				prevous += currentValue;
			}
		}
		if (currentArrayName.length === arrCurrentIndex + 1) {
			console.log(currentArrayName.length);
			console.log(arrCurrentIndex + 1);
			return prevous;
		} else {
			console.log(currentArrayName.length);
			console.log(arrCurrentIndex + 1);

			return (prevous += "-");
		}

		//console.log(currentArrayName.length);
	}

	accArray = splittedStr.reduce(mumlingReducer, "");
	console.table(accArray);
}

reductor("xxcv");
