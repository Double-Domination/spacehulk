function fridayTheThirteenths(start, end) {
	var count = 0;
	let result = [];
	if (typeof end === "undefined") {
		end = start;
	}
	for (let yearStart = start; yearStart <= end; yearStart++) {
		countInCurrent(yearStart);
	}

	function countInCurrent(year) {
		for (var month = 0; month < 12; month++) {
			var d = new Date(year, month, 13);
			//console.log(d);
			if (d.getDay() == 5) {
				result.push(
					`${1 + d.getMonth()}/${d.getDate()}/${d.getFullYear()}`,
				);
				count++;
			}
		}
	}
	return result.join(" ");
}

console.log(fridayTheThirteenths(2000));

const count = (year) =>
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].reduce(
		(acc, m) => acc + (new Date(year, m, 13).getDay() === 5),
		0,
	);
