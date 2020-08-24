/**
 * Created by Админ on 8/13/2020.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import deathwingPlasma from './assets/deathwing-plasma.jpg';
import deathwingSergeant from './assets/deatwing-sergeant.jpg';


class Developer{
	constructor(firstName, lastName, devProficiency){
		this.firstName=firstName;
		this.lastName=lastName;
		this.devProficiency=devProficiency;
	}
	getDevStats(){
		return (
			console.log(this.firstName +' '+ this.lastName+' '+ this.devProficiency)

		);
	}
}

const devPetrov=new Developer('Slava', 'Petrov', 'Java');
const devSlava=new Developer('Slava', 'Slavov', 'C plus plus');
devPetrov.getDevStats();
devSlava.getDevStats();


//Page 25 Road to React

const list = [
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

const  List=()=>{
	return (
		list.map(function (item){
			return (
				<div key ={item.objectID}>
				        <span>
					        <a href={item.url}>
						        {item.title}
					        </a>
				        </span>
				        <span>{item.author}</span>
				        <span>{item.num_comments}</span>
				        <span>{item.points}</span>
			        </div>
			);
		})
	);

}

const deathWingTerminatorSergeant= {
	      W: 2,
	      BS: 3,
	      WS: 3,
	      Sv: 2,
	      M: 5,
	      Ld: 9,
	      S: 4,
	      T: 4,
	      InvSv: 5,
	      A: 3,
      };







    const UnitCard=(props)=>{
        return(
        	<div
		        className="standard-unit-card"
	        >
		        <h1 className='unit-card-header'>{props.unitCardTitle}</h1>

		        <ol>
			        <List/>
                </ol>

		        <label htmlFor="wargearSearch">
			        Search wargear in reliquarium
		        </label>
		        <input id="wargearSearch" type="text"/>
	        </div>
        );
    };


export default UnitCard;
/*Page 27 Advanced component definition*/