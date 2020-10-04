import React from "react";

import styled from "styled-jss";

function MetaCard() {
	const Perge = styled("div")({
		padding: "10px",
		backgroundColor: "tomato",
		border: "solid indigo 9px",
	});

	const Green1 = styled("button")({
		padding: "20px",
		margin: "40px",
		backgroundColor: "indigo",
		fontWeight: 900,
		textDecoration: "underline",
		borderRadius: "10px",
	});

	const Red1 = styled("button")({
		backgroundColor: "red",
		color: "black",
		borderRadius: "20px",
		textDecoration: "underline",
		textTransform: "uppercase",
	});

	return (
		<>
			<Perge>
				<Red1 className='red'>MetaMitol</Red1>
				<Green1 className='red overlap'>MetaMitol2</Green1>
				<p>Purge heretics</p>
				<Red1>Purge heretics 2</Red1>
			</Perge>
		</>
	);
}

export default MetaCard;
