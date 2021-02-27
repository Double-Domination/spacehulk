//reqired imports
import React from "react";
import ReactDOM from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import styled from "styled-jss";
//img res

document.title = "Improvised REPL";

// start of the component
const ImprovisedREPL = (props) => {
	//inner styling {used JSS}
	const BaseOutput = styled("div")({
		backgroundColor: "darkgrey",
		color: "red",
	});

	//inner logic

	function showDown(callsign, repetitionCount) {
		let output = callsign;
		for (
			let counterState = 0;
			counterState < repetitionCount;
			counterState += 1
		) {
			console.log("EXEC PERFORMED");
			output += callsign;
		}

		return output;
	}
	//redner phase
	return (
		<BaseOutput>ImprivisedREPL>>>{showDown("Boris here! ", 4)}</BaseOutput>
	);
};

// Componet export
export default ImprovisedREPL;

function loadScript(src) {
	let script = document.createElement("script");
	script.src = src;
	document.head.append(script);
}

function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

//helper function
var indexedKeysInObject = {
	keyIndex: function (n) {
		return this[Object.keys(this)[n]];
	},
};

//percolation
var forSwithchCases = 1;
switch (forSwithchCases) {
	case 0:
		console.log("walue 0");
		continue;
	case 2:
		console.log("value 2 ");
		break;
	case 1:
		console.log("target value");
		break;
}

var strToReverse = "jgnbgnbhgnbh";

(function () {
	let stringToConvert = "1244z";

	let arrToReverse = stringToConvert.split("");

	console.table(`>>> ${arrToReverse}`);
	let reversedArr = [];
	while (arrToReverse.length < 0) {
		extractedCharacter = arrToReverse.pop();
		reversedArr.push(extractedCharacter);
	}

	console.table(`Reversed >>> ${reversedArr}`);
})();

//Codewars reverse string
function solution(str) {
	let arrToReverse = str.split("");
	let reversedArr = [];

	while (arrToReverse.length !== 0) {
		extractedCharacter = arrToReverse.pop();
		reversedArr.push(extractedCharacter);
	}

	let result = reversedArr.join("");
	return result.toString();
}

function solution(str) {
	return str.split("").reverse().join("");
}

//Palindrome check

function isPalindrome(line) {
	let initLine = line.toString();
	let reversedLine = initLine.split("").reverse().join("");

	if (initLine === reversedLine) {
		return true;
	} else {
		return false;
	}
}

//is Anagram Codewars
// write the function isAnagram --  2 strings
var isAnagram = function (test, original) {
	let result = false;

	let splittedTest = test.toLowerCase().split("");
	let splittedOriginal = original.toLowerCase().split("");

	// FIX empty string check

	while (splittedTest.length !== 0) {
		let extractedCharacter = splittedTest.pop();
		checkExistanceInOriginal(extractedCharacter);
	}

	function checkExistanceInOriginal(checkCharacter) {
		for (let i = splittedOriginal.length; i !== 0; i--) {
			if (checkCharacter === splittedOriginal[i - 1]) {
				splittedOriginal = splittedOriginal.splice(i, 1);
			} else {
				result = false;
				break;
			}
		}
	}
	if (splittedTest.length === 0 && splittedOriginal.length === 0) {
		result = true;
	} else {
		result = false;
	}
	console.table(`>>> ${result}`);
	return result;
};

(function (test, original) {
	let result;

	let splittedTest = test.toLowerCase().split("");
	let splittedOriginal = original.toLowerCase().split("");

	while (splittedTest.length !== 0) {
		extractedCharacter = splittedTest.pop();
		if (checkExistanceInOriginal(extractedCharacter) === false) {
			result = false;
			console.log("Did not find character");
			break;
		}

		console.log(`>Char existed in original >> removed from both`);
	}

	function checkExistanceInOriginal(checkCharacter) {
		for (let i = 0; i < splittedOriginal.length; i++) {
			if (checkCharacter === splittedOriginal[i]) {
				splittedOriginal.splice(i, 1);
				return true;
			} else {
				return false;
			}
		}
	}

	if (splittedTest.length === 0 && splittedOriginal.length === 0) {
		result = true;
	} else {
		result = false;
	}
	console.table(`>>>result  ${result}
    >splOrig ${splittedOriginal}
    >splTest ${splittedTest}
	`);

	return result;
})("abcd", "");

(function (test, original) {
	let result;

	let splittedTest = test.toLowerCase().split("");
	let splittedOriginal = original.toLowerCase().split("");

	while (splittedTest.length !== 0) {
		extractedCharacter = splittedTest[0];
		if (checkExistanceInOriginal(extractedCharacter)) {
			console.log(` character ${extractedCharacter} finded`);
			splittedTest.shift();
			console.log(`>Char existed in original >> removed from both`);
		} else {
			console.log(`Did not find char ${extractedCharacter}`);
			break;
		}
	}

	function checkExistanceInOriginal(checkCharacter) {
		for (let i = 0; i < splittedOriginal.length; i++) {
			if (checkCharacter === splittedOriginal[i]) {
				splittedOriginal.splice(i, 1);
				return true;
			} else {
				return false;
			}
		}
	}

	if (splittedTest.length === 0 && splittedOriginal.length === 0) {
		result = true;
	} else {
		result = false;
	}
	console.table(`>>>result  ${result}
    >splOrig ${splittedOriginal}
    >splTest ${splittedTest}
	`);

	return result;
})("123", "321");

function anagramRecursive(testStr, origStr) {
	// convert to arrays and ignore case
	let arrTest = test.toLowerCase().split("");
	let arrOriginal = original.toLowerCase().split("");
	let arrRemoved = [];

	//extract first symbol from test string

	//For better understanding test string used as stack
	//if character was finded ->> delete from both arrays
	arrRemoved.push(arrOriginal.find(removeCharIfExisted(arrTest[0])));

	function removeCharIfExisted(character, element, index, array) {
		if (element === character) {
			let deletedCharr = array.splice(index, 1);
			console.log(` Elem ${element} removed in ${array}[${index}]`);
			console.log(`Deleted Char ${deletedCharr}`);
			deletedCharr = arrTest.shift();
			console.log(`Shifting arrTest`);
			console.log(`Deleted Char ${deletedCharr}`);
			return true;
		} else {
			console.log(`Char ${extractedCharacter} didnt found`);
			return false;
		}
	}
}

var srtTest = test.toLowerCase().split("").sort().join("");
var srtOriginal = original.toLowerCase().split("").sort().join("");

if (srtTest === srtOriginal) {
	return true;
} else {
	return false;
}

if (year % 100 >= 1) {
	return Math.floor(year / 100) + 1;
} else {
	return Math.floor(year / 100);
}

//codewars factorial calculations
function calculateFactorial(n) {
	let result;
	if (n === 0) {
		return result;
	} else {
		return calculateFactorial(n - 1);
	}
}

function factorial(n) {
	if (n < 0 || n > 12) throw new RangeError();
	return n <= 1 ? 1 : n * factorial(n - 1);
}

function removeEveryOther(arr) {
	return arr.filter(function (elem, index) {
		return index % 2 === 0;
	});
}

//remove doplicates very short
function distinct(arr) {
	return [...new Set(arr)];
}

//function find capitals
function capital(capitals) {
	return capitals.map(function (e) {
		return "The capital of " + (e.state || e.country) + " is " + e.capital;
	});
}

function findShort(s) {
	return Math.min(...s.split(" ").map((s) => s.length));
}
