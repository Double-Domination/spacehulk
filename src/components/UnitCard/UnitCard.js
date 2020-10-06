/**
 * Created by Админ on 9/26/2020.
 */
/**
 * Created by Админ on 9/6/2020.
 *
 * Unit Card
 */
import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import styled from "styled-jss";
/* import fontGlobal from "../AssetsGlobal/vt323.woff"; */
document.title = "CSS Manual TurboCharge";

const stlDefinition = createUseStyles({
	blackrage: {
		backgroundColor: "red",
		padding: "15px",
		color: "black",
		/*
			"@font-face": {
			fontFamily: " vt323regular ",
			src: "url(../AssetsGlobal/vt323.woff)",
		},
		*/
	},
});

function UnitCard() {
	const stlUnitCard = stlDefinition();
	const Container = styled("div")({
		backgroundColor: "silver",
	});

	const Green = styled("button")({
		padding: "5px",
		margin: "40px",
		backgroundColor: "green",
		fontWeight: 900,
		textDecoration: "underline",
		borderRadius: "61px",
	});

	const Red = styled("button")({
		backgroundColor: "red",
		color: "black",
		borderRadius: "20px",
		textDecoration: "underline",
		textTransform: "uppercase",
	});

	return (
		<Container>
			<Red>D0ubleD0m1nation</Red>
			<Green>D0ubleD0m1nation</Green>
			<p className={stlUnitCard.blackrage}>
				aapd recus'andae' fugit ducim'us pariatur voluptas suscipit.
				(Nisi ex reppppppiciendis 'officia' officiis. Debitis deserunt')
				dolorem. hh( Dolo )res sit quos sint nesciunt natus fugiat aut
				'laudantiu'm nisi.
			</p>
		</Container>
	);
}

/* TODO: Qouc'kkka' dosent work

/*

""Ty"pe S"
cage -41-
s85 style/ i/nherinheritances
Type 67 PseudoSelectors
98 - 122 Inheritrd Styles Accamulation
111-135 Casca in ACTION
116-140 Cascade in ACTN
116-140 Fonts Applied oogle Fonts
123
Plaing with multicursor$s
page 129
page 151 Playing with fonts
*/
export default UnitCard;
