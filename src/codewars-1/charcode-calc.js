function calc(x) {
	let processedX = x.split("");
	processedX = processedX.map((current) => current.charCodeAt());

	let total1 = processedX.reduce(
		(accumulator, current) => (accumulator += current),
	);

	total1 = new String(total1);

	let total2 = total1.replace(/7/gi, 1);
	function substrDigitByDigit(str1, str2) {
		str1 = Array.from(str1);
		str2 = Array.from(str2);
		result = 0;
		while (str1.length !== 0) {
			curStr1Pop = str1.pop();
			curStr2Pop = str2.pop();
			curDiff = curStr1Pop - curStr2Pop;
			result += curDiff;
		}
		return result;
	}

	return substrDigitByDigit(total1, total2);
}

// console.log(calc("asdfdkf"));
console.log(calc("asdfdkf"));
