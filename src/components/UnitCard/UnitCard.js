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

const ajasckHummer = [4, 5, 6, 7, "444"];

document.title = "CSS Manual TurboCharge";

function UnitCard() {
	const Container = styled("div")({
		padding: "",
		backgroundColor: "silver",
		border: "double indigo 5px",
	});

	const Green = styled("button")({
		padding: "",
		margin: "40px",
		backgroundColor: "green",
		fontWeight: 900,
		textDecoration: "",
		borderRadius: "",
	});

	const Red = styled("button")({
		backgroundColor: "red",
		color: "black",
		borderRadius: "20px",
		textDecoration: "underline",
		textTransform: "uppercase",
	});

	return (
		<>
			<Container>
				<Red>D0ubleD0m1nation</Red>
				<Green>D0ubleD0m1nation</Green>
				<p>
					aapd recus'andae' fugit ducim'us pariatur voluptas suscipit.
					(Nisi ex reppppppiciendis 'officia' officiis. Debitis
					deserunt') dolorem. hh( Dolo )res sit quos sint nesciunt
					natus fugiat aut 'laudantiu'm nisi.
				</p>
				<Red>
					Perferendis quam exercitationem repellendus eum. Quis
					conseuaur incidunt ysipqui et earum aut ea. Occaecati
					voluptatum" nam explicabo amet et.
				</Red>
			</Container>
		</>
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
*/
export default UnitCard;
