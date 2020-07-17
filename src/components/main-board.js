/**
 * Created by Админ on 7/16/2020.
 */
import React from 'react';

function YouAreAlwaysWelcome() {
	return <h1>Incredable my Friend!</h1>
}

class SuperWelcome extends Component{
	render(){
		return <h1>Welcome from OOP -like Component</h1>
	}
}

function United() {
	return(
		<div>
			<SuperWelcome/>
			<YouAreAlwaysWelcome class="spacehulk-deathwing"/>
		</div>
	)
}


React.createElement('div', null, 'Simple div with test');
React.createElement('input', {className: 'input-simple'});




export default United;