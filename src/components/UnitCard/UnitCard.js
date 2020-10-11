/**
 * Created by Админ on 9/26/2020.
 */
/**
 * Created by Админ on 9/6/2020.
 *
 * Unit Card
 */
import React from 'react';
import { render } from 'react-dom';
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss';
import styled from 'styled-jss';
/* import fontGlobal from '../AssetsGlobal/vt323.woff'; */
document.title = 'CSS Manual TurboCharge';

const stlDefinition = createUseStyles({
	typographyMixin: {
		fontSize: '.75rem',
		fontStyle: 'bold',
		fontWeight: '200',
		textTransform: 'capitalize',
		fontVariant: 'small-caps',
		textDecoration: 'overline underline',
		letterSpacing: '-1px',
		wordSpacing: '2px',
		textIndent: '4em',
		color: 'white',
		textAllign: 'center',

	},
	
	blackrage: {
		backgroundColor: 'silver',
		padding: '15px',
		color: 'black',
		border: 'double 8px #FFA',
		textShadow: '-5px 5px 0px red, 5px -5px 0px teal',
		textAllign: 'center',
	},
	triBorder: {
		lineHeight: '75%',
		width: '90%',
		margin: '0 auto',
		dislay: 'block',
		boxSizing: 'border-box',
		boxShadow:
			'-5px -5px 0px pink, 5px 5px 0px tomato, -5px 5px 0px red, 5px -5px 0px orange',
		textDecoration: 'none',
		backgroundColor: 'white',
		border: 'solid black 9px',
		'& p::first-letter': {
			fontSize: '40px',
			color: 'gold',
		},
	},

});

function UnitCard() {
	const stlUnitCard = stlDefinition();
	
	const Container = styled('div')({
		backgroundColor: 'silver',
		
		
	});

	const Green = styled('button')({
		padding: '5px',
		margin: '40px',
		backgroundColor: 'green',
		fontWeight: 900,
		textDecoration: 'underline',
		borderRadius: '61px',
	});
	const TemlateLiteralsOl = styled('ol')({
		border: 'solid black 5px',
		borderradius:' 5px',
		padding: '12px',
		backgroundColor:'gold',
		color:'violet',
		
	});


	const Red = styled(Green)({
		backgroundColor: 'white',
		color:'violet'
	/* 	backgroundColor: 'red',
		color: 'black',
		borderRadius: '20px',
		textDecoration: 'underline',
		textTransform: 'uppercase', */
	});

	const ViText = styled('div')({
		fontSize: '1em',
	});

	return (
		<Container >
			<Red>D0ubleD0m1nation</Red>
			<Green>D0ubleD0m1nation</Green>
			
			<TemlateLiteralsOl>
				<li>dubas</li>
				<li>bombud</li>
				<li>uas</li>
				<li>METILXXX</li>
			</TemlateLiteralsOl>
		</Container>
	);
}

/* TODO: Qouc'kkka' dosent work

/*

''Ty'pe S'
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
page 168 192 Stylig Lists

*/
export default UnitCard;
