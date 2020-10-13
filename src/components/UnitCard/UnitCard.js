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

import  bloodAngels  from '../AssetsGlobal/40k-icons/src/svgs/blood-angels.svg';

document.title = 'CSS Manual TurboCharge'

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
		color: 'crimson',
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


	const CustomOL = styled('ol')({
		color: 'orange',
		border: 'dashed 3px black',
		'& li': {
			textDecoration: 'underline',
			marginLeft: '2em',
			fontSize: '0,9 rem',
			listStyleType: 'circle',
			listStylePosition: 'inside',
			color: 'black',
			
			backgroundImage: `url(${bloodAngels})`,
			backgroundPosition: '0 0',
			backgroundRepeat: 'no-repeat',
			paddingLeft:'2em',
		}
	});
	
	


	const Red = styled(Green)({
		backgroundColor: 'white',
		color:'violet'
	});

	const ViText = styled('div')({
		fontSize: '1em',
	});

	return (
		<Container >
			<Red>D0ubleD0m1nation</Red>
			<Green>D0ubleD0m1nation</Green>
			
			<CustomOL>
				<h2>Something here</h2>
				<li>dubas</li>
				<li>bombud</li>
				<li>uas</li>
				<li>METILXXX</li>
			</CustomOL>
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
