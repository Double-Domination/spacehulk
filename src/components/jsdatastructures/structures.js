// "use strict";

// const repl = require("repl");

// const replServer = repl.start({
// 	prompt: "REPL ENGAGED >>>",
// 	useClours: true,
// 	useGlobal: true,
// });

console.log("");
//chapter one quick overview
var globalVr = ["tiranticos", "storm tropps", "interceptors"];

let localScopeVr = ["jit", "git1;"];

const DMG_TYPES = ["fire", "frostcanon"];

function showArray(array) {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		console.log(element);
	}
}

showArray(DMG_TYPES);

console.log("JJJJJJJJJJJJ");
var num = 1; //{1}
num = 3; //{2}
var price = 1.5; //{3}
var name = "Packt"; //{4}
var trueValue = true; //{5}
var nullVar = null; //{6}
var und;

console.log("num: " + num);
console.log("name: " + name);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVar);

console.log("packt" ? true : false);

console.log("packt" == true);

console.log(NaN == 1);

if (num === 1) {
	console.log("num is equal to 1");
} else {
	console.log("num is not equal to 1, the value of num is " + num);
}

var month = 5;
switch (month) {
	case 1:
		console.log("January");
		break;
	case 2:
		console.log("February");
		break;
	case 3:
		console.log("March");
		break;
	default:
		console.log("Month is not January, February or March");
}

function revursiveprint(objectList) {
	let itemCounter = Object.keys(objectList).length;
	if (objectList.length !== 0) {
		console.log(itemCounter);
		//itemCounter -= 1;
		//return revursiveprint();
	} else {
		console.log("Object list is empty");
	}
}

let randomMarine = {
	name: "boreale",
	hp: "2",
	weapon: "bolter",
	armor: "terminator",
};

//console.log("-=revur=-");
//revursiveprint(randomMarine);
//console.log("Items in ");

// var i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 2);

/// Arrays

var averageTemperatures = [];

averageTemperatures[0] = 31.9;
averageTemperatures[1] = 41.9;
averageTemperatures[3] = 21.9;
averageTemperatures[4] = 35.9;
averageTemperatures[5] = 31.3;
averageTemperatures[6] = 31.2;
averageTemperatures[7] = 30.9;
averageTemperatures[8] = 11.9;

var isEmptyArray = new Array();

var sevenEmptyValuesInArray = new Array(7);

var initializedArrayWithStrings = new Array(
	"monday",
	"tusday",
	" wendsday",
	"tusday",
	"friday",
	"saturday",
	"sunday",
);

var arrayCreatedByLiteral = [];

function checkArrayLengthProps(paramArray) {
	console.log("Array length is " + paramArray.length);
}

function showType(paramCheckType) {
	console.log(typeof paramCheckType);
}
