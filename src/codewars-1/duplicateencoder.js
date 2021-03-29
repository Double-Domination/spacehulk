function duplicateEncode(word) {
	let uniqueArr = [];
	let dublicateArr = [];

	let processedWord = word.split("");

	function chekIfDuplicate(char) {
		if (dublicateArr.includes(char) === true) {
			return true;
		} else {
			return false;
		}
	}

	function isUnique(char) {
		if (
			uniqueArr.includes(char) === false &&
			dublicateArr.includes(char) === false
		) {
			return true;
		} else {
			return false;
		}
	}

	function isSecondDescend(char) {
		if (
			uniqueArr.includes(char) === true &&
			dublicateArr.includes(char) === false
		) {
			return true;
		} else {
			return false;
		}
	}

	for (const curChar of processedWord) {
		switch (true) {
			case chekIfDuplicate(curChar) === true:
				console.log(curChar + " dupl");
				break;

			case isSecondDescend(curChar) === true:
				console.log(curChar + " 2ndDes");
				let removed = uniqueArr.splice(uniqueArr.indexOf(curChar), 1);
				removed = removed.join();
				dublicateArr.push(removed);
				break;

			case isUnique(curChar) === true:
				console.log(curChar + " Unique- push in uniqueArr");
				uniqueArr.push(curChar);
				break;

			default:
				console.log(isUnique(curChar) + " unic");
				console.log(chekIfDuplicate(curChar) + " dupl");
				console.log(isSecondDescend(curChar) + " secdes");
				console.log("def");
				break;
		}
	}
	console.log(dublicateArr);
	console.log(uniqueArr);

	let replacedMatching = [];
	for (const curCharForReplase of processedWord) {
		if (dublicateArr.includes(curCharForReplase) === true) {
			replacedMatching.push(")");
		} else if (uniqueArr.includes(curCharForReplase) === true) {
			replacedMatching.push("(");
		}
	}

	return replacedMatching;
}

console.log(duplicateEncode("aaaabbccdef"));

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split("")
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
		})
		.join("");
}
