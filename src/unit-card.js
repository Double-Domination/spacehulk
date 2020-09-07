/**
 * Created by Админ on 8/13/2020.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import deathwingPlasma from './assets/deathwing-plasma.jpg';
import deathwingSergeant from './assets/deatwing-sergeant.jpg';



document.title='Deathwing unit card';
class Developer{
	constructor(firstName, lastName, devProficiency){
		this.firstName=firstName;
		this.lastName=lastName;
		this.devProficiency=devProficiency;
	}
	getDevStats(){
		return (
			console.log(this.firstName +
			            ' '+ this.lastName+
			            ' '+ this.devProficiency
			)

		);
	}
}

let devPetrov=new Developer('Slava', 'Petrov', 'Java');
let devSlava=new Developer('Slava', 'Slavov', 'C plus plus');

devSlava=devPetrov;

devSlava.devProficiency="Turbochargers";
devPetrov.getDevStats();
devSlava.getDevStats();

devPetrov.devProficiency="superchargers";
devPetrov.getDevStats();
devSlava.getDevStats();





//Page 25 Road to React

const stories = [
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
	},
	{
		title:'Formik',
		url:'https://formic.org',
		author:'Warios autors',
		num_comments:2,
		points:4,
		objectID:2,
	},
];



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
	/*onClick Handler*/
	const handleReliquariumChange=(event)=>{
		/*setSearchTerm(event.target.value);*/
	};

/*
 const searchTermState=useState('');
 const serchTerm = searchTermState[0];
 const setSerchTerm= serchTermStrate[1];

 const [searchTerm, setSearchTerm]=React.useState('');
* */



    return(
        <div
	        className="standard-unit-card">
	        <h1 className='unit-card-header'>
		        {props.unitCardTitle}
	        </h1>

	        <ol>
		        <List list={stories}/>
            </ol>

	        <label htmlFor="wargearSearch" style={{color:'red'}}>
		        Search wargear in reliquarium
	        </label>
	        <input
		        id="wargearSearch"
		        type="text"
	            onChange={handleReliquariumChange}
	        />

	        <p>
		        Searching for <strong>-=relic=-</strong>
	        </p>


        </div>
    );
};

const  List=(props)=>{
	return (
		props.list.map((item)=>{
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

};


export default UnitCard;
/*Page 27 Advanced component definition*/
/*Handler Function in JSX*/
/*ReactProperties*/
/*Page 36*/
/*useState.hook*/
