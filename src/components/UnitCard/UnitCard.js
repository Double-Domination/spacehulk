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

import bloodAngels from '../AssetsGlobal/40k-icons/src/svgs/blood-angels.svg';
import deathDread from '../AssetsGlobal/assets/death-company-dreadnout.jpg';

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
	clearfixit: {
		float:'right',
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
		backImg: {
			backgroundImage:`url(${deathDread})`,
			backgroundRepeat:'no-repeat',
			backgroundOrigin:'content-box',
			border:'dashed red 3px',
			
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
			listStyleType: 'none',
			listStylePosition: 'inside',
			color: 'black',
			
			backgroundImage: `url(${bloodAngels})`,
			backgroundPosition: '0 0',
			backgroundRepeat: 'no-repeat',
			paddingLeft: '2em',
		}
	});

	const GridLine = styled('div')({
		border: 'dashed 3px purple',
		backgroundColor: 'silver',
		clear: 'both',
		dislay: 'block',
		overflow: 'hidden',
		boxShadow: '0 0 15px 5px rgba(44,82,100, .75)',
		width: '100%',
		padding: '0',
		minWidth: '100%',
		maxWidth: '100%',
		

	});
	const GridCol = styled('div')({
		border: 'solid 3px red',
		margin: '0 auto',
		float: 'right',
		backgroundColor: 'silver',
		dislay: 'inline-block',
		maxWidth: '100%',
		minWidth: '10%',
		boxSizing: 'border-box',

		
	});


	const CollapsingMargins = styled('div')({
		margin: '10px',
		backgroundColor: 'gold',
		display: 'inline-block',
		borderRadius: '0 20%/100%'
	});
	
	


	const Red = styled(Green)({
		backgroundColor: 'white',
		color: 'violet'
	});

	const ViText = styled('div')({
		fontSize: '1em',
	});

	const CoverBack = styled('div')({
		backgroundImage: `url(${deathDread})`,
		backgroundColor: 'silver',
		backgroundBlendMode: 'screen',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'scrool',
		
		backgroundOrigin: 'border-box',
		backgroundClip: 'content-box',
		backgroundPosition: 'left center',
		backgroundSize: '50% auto',
		border: 'dashed red 9px',
		padding: '20px',
		height: '500px',
		width: '400px',
		
		
			
	});

	const CoverbackShorthand = styled('div')({
		background: `url(${deathDread}) center center  no-repeat #FFF `,
		width: '300px',
		border: 'solid black 3px'
		
	});

	const ContainerAlligmentRow = styled('div')({
		dislay:'block',
		border: 'dashed black 3px',
		padding: '15px',
		textAlign:'right',
		// clear:'both',
		
		
	});
	
	const ContainerAlligmentCell = styled('div')({
		dislay: 'inline',
		border:'solid white 4px',
		backgroundColor:'violet',
		padding: '15px',
		width: '200px',
		margin:'0 auto',
		// float:'left'
		
		
	});

	return (
		<Container >
			<ContainerAlligmentRow>
			2524542
				<ContainerAlligmentCell>23524545</ContainerAlligmentCell>
				<ContainerAlligmentCell>23524545</ContainerAlligmentCell>
			</ContainerAlligmentRow>
			
			<CoverBack>
				SSSSSSSSSSSSSSSSSs
			</CoverBack>

			<CoverbackShorthand>
				xxxxxxxxxxxxxxxxxxxxxxx
			</CoverbackShorthand>
			<Red>D0ubleD0m1nation</Red>
			<Green>D0ubleD0m1nation</Green>
			<CollapsingMargins >
				<p>Veritatis odit in sed rerum et aut consequatur minima.</p>

			</CollapsingMargins>

			<CollapsingMargins style={{margin :'10px'}}>
				<h1 style={{ margin: '70px' }}>
					ollapsing margin fx
				</h1>
				<p style={{ margin: '70px' }}>
					veritatis alias sunt
				</p>

			</CollapsingMargins>

			<CustomOL>
				<h2>Something here</h2>
				<li>dubas</li>
				<li>bombud</li>
				<li>uas</li>
				<li>METILXXX</li>

			</CustomOL>
			<h1>Grid Princeps</h1>
			<GridLine>
				<GridCol>11111111111</GridCol>
				<GridCol>11111111111</GridCol>
				<GridCol>11111111111</GridCol>
				<GridCol>2222222222222</GridCol>
				<GridCol>11111111111</GridCol>
			</GridLine>

			<GridLine>
				<img className={stlUnitCard.clearfixit} src={deathDread} alt="1"/>
				<img className={stlUnitCard.clearfixit}
					src="https://via.placeholder.com/350" alt="1" />
				<img className={stlUnitCard.clearfixit}
					src="https://via.placeholder.com/150" alt="1" />
				<img className={stlUnitCard.clearfixit}
					src="https://via.placeholder.com/150" alt="1" />
			</GridLine>

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
page 204 228 box shadows
height and width
wraooing content with float elements
sidebar creator
adding grafic to web pages
styling backgrounds
bring special effects to background images




*/
export default UnitCard;
