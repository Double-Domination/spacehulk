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
