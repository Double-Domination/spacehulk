/**
 * Created by Админ on 9/26/2020.
 */
/**
 * Created by Админ on 9/6/2020.
 *
 * Unit Card
 */
import React from 'react';
import ReactDOM from 'react-dom';
import styled, {ThemeProvider} from 'styled-jss'




document.title        = 'CSS Manual TurboCharge';
function UnitCard() {
	const view={
		greenBordered:{
			border: 'double indigo 7px',
			padding: '40px',
		},
	};

	const Card=styled('button')({
		backgroundColor: 'red',
		color: 'black',
		borderRadius:'20px',
		textDecoration:'underline'
    });



	return (
		<Card className={view.greenBordered}>YYYYY</Card>
	);
}

/*Page 22*/
/*Page 41*/
/*Type Selectors*/
/*Type 67 PseudoSelectors*/
/*85 style inheritance*/
/*91 - 115 style inheritance*/
/*98 - 122 Inheritrd Styles Accamulation*/


export default UnitCard;