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
