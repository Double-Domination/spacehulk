/**
 * Created by Админ on 7/19/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user={
	firstName: "first",
	lastName: "second",
};

function getGreeting(user) {
	if(user) {
		return <h1>Hail to {formatName(user)}</h1>
	}
	return <h1>Hail, stranger</h1>;
}


function Engine() {



	return(
		<div className="horizontal-divider">
			{getGreeting(user)}
		</div>
	)
}

export default Engine;