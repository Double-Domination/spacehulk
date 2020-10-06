import React from "react";

import styled from "styled-jss";

function MetaCard() {
	const Perge = styled("div")({
		padding: "10px",
		backgroundColor: "tomato",
		border: "solid indigo 9px",
	});

	return (
		<Perge>
			Aut aliquam iste esse libero unde officiis. Perferendis aliquid id
			qui asperiores iste quibusdam dolorem.
		</Perge>
	);
}

export default MetaCard;
