/**
 * Created by Админ on 8/13/2020.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import deathwing from './assets/deathwing-plasma.jpg';


function App(){
	const title="Dethwing force customization";
	return (
		<header className="app-header">
			<h1>{title}</h1>
			<img src={deathwing}
			     alt="Defenders of mankind"/>
			<p>Enter the battle!!</p>
			<a href="#"
			   target="_blank"
			   rel="noopener noreferer">
					Start force customization
			</a>
		</header>
	);
}

export default App;
