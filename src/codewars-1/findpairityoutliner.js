function findOutlier(integers) {
	let odd = [];
	let even = [];
	let disbalnce = 0;
	let result;

	for (const current of integers) {
		//disbalnce = odd.length - even.length;
		//if (disbalnce > 2 || disbalnce < -2) {
		//	//if disbalance <0 need to find odd
		//	//if disbalance >0 need to find even
		//	findTarget(disbalnce);
		//	break;
		//} else
		if (current % 2 === 0) {
			even.push(current);
		} else if (current % 2 !== 0) {
			odd.push(current);
		}
	}

	function findTarget(disbalanceParam) {
		if (disbalanceParam > 0) {
			//find even
			for (const curEvenCheck of integers) {
				if (curEvenCheck % 2 === 0) {
					result = curEvenCheck;
					break;
				}
			}
		} else if (disbalanceParam < 0) {
			//find odd
			for (const curOddCheck of integers) {
				if (curOddCheck % 2 !== 0) {
					result = curOddCheck;
					break;
				}
			}
		}
	}
	if (odd.length === 1) {
		result = odd[0];
	} else if (even.length === 1) {
		result = even[0];
	}

	console.log(even);
	console.log(odd);
	console.log(result);

	return result;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
