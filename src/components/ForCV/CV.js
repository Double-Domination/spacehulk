import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import styled from "styled-jss";

function CV(props) {
	const BasePlate = styled("div")({
		color: "tomato",
		border: "1px dashed black",
	});

	return (
		<BasePlate>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
			animi?
		</BasePlate>
	);
}

export default CV;
