/**
 * Created by Админ on 8/13/2020.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import deathwingPlasma from './assets/deathwing-plasma.jpg';
import deathwingSergeant from './assets/deatwing-sergeant.jpg';

function getString(string){
    return string;
}


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

                </ol>
	        </div>
        );
    }
}

export default UnitCard;
