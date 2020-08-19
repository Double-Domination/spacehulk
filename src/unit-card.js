/**
 * Created by Админ on 8/13/2020.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import deathwingPlasma from './assets/deathwing-plasma.jpg';
import deathwingSergeant from './assets/deatwing-sergeant.jpg';





const unitCardStats=function (unitCard){

	unitCard.forEach(()=>{
		return <li>:  {1} mapIndex: {2}</li>
	});
};


function decomposedList(obj)=>{

	return (
		<li>{key}______{value}</li>
	);
};





const simplyNumbers=[1,3,4,5,6,1,4];




const randomJSON = [
	{
		title:'React',
		url:'https://reactjs.org',
		author:'Jordan Walke',
		num_comments:3,
		points:4,
		objectID:0,
	},
	{
		title:'Redux',
		url:'https://reduxjs.org',
		author:'Dan Abramov, Andrew Clark',
		num_comments:2,
		points:5,
		objectID:1,
	}
];

const deathWingTerminatorSergeant={
	W: 2,
	BS:3,
	WS:3,
	Sv:2,
	M:5,
	Ld:9,
	S:4,
	T:4,
	InvSv:5,
	A:3,
};


class UnitCard extends React.Component{
    constructor(props){
        super(props);
		this.state={

		}

    }


    render(){
        return(
        	<div
		        className="standard-unit-card"
	        >
		        <h1 className='unit-card-header'>{this.props.unitCardTitle}</h1>

		        <ol>
			        {decomposedList(deathWingTerminatorSergeant)}
                </ol>

		        <label htmlFor="wargearSearch">
			        Search wargear in reliquarium
		        </label>
		        <input id="wargearSearch" type="text"/>
	        </div>
        );
    }
}

export default UnitCard;
