/**
 * Created by Админ on 9/26/2020.
 */
/**
 * Created by Админ on 9/6/2020.
 *
 * Unit Card
 */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-jss";

document.title = "CSS Manual TurboCharge";
function UnitCard() {
	const Green = styled("button")({
		padding: "15px",
		margin: "40px",
		backgroundColor: "green",
		fontWeight: 900,
		textDecoration: "underline",
		borderRadius: "15px",
	});

	const Red = styled("button")({
		backgroundColor: "red",
		color: "black",
		borderRadius: "20px",
		textDecoration: "underline",
	});

	return (
		<>
			<Red>HHHHHHHHH</Red>
			<Green>fffffffffff</Green>
		</>
	);
}

/*Page 22*/
/*Page 41*/
/*Type Selectors*/
/*Type 67 PseudoSelectors*/
/*85 style inheritance*/
/*91 - 115 style inheritance*/
/*98 - 122 Inheritrd Styles Accamulation*/
/*111-135 Cascade in ACTION*/
/*116-140 Cascade in ACTION*/
/*116-140 Fonts Applied Google Fonts*/

export default UnitCard;
