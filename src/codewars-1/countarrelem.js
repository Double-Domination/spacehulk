function count(array) {
	result = {};
	//your code here
	for (const current of array) {
		console.log(current);
		if (!result.hasOwnProperty(current)) {
			//console.log("not " + current);
			result[current] = 1;
		} else if (result.hasOwnProperty(current)) {
			result[current] += 1;
		}
	}
	return result;
}

console.log(count(["a", "a", "b", "c", "f", "a"]));
