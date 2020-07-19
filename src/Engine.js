/**
 * Created by Админ on 7/19/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Engine() {
	function formatNmae() {
		const extendedUser={
			firstName: 'Double',
			lastName: 'Doumination',

		};
		return extendedUser.firstName + ' ' + extendedUser.lastName;
	}

	/*const element=<h1>For the emperor</h1>;*/

	return(
		<div className="horizontal-divider">
			{formatNmae()}
		</div>
	)
}

export default Engine;