/**
 * Created by Админ on 7/16/2020.
 */

import React, {Component} from 'react';
/*
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


*/


/*export default United;*/
/*

//The Old one
class ButtonWithCounter extends Component{
	constructor(props){
		super(props);
		this.state={

			clickCounter:0,
		};

		this.handleClick=this.handleClick.bind(this);
	}
}
*/


//Modern fashion

class ModernCounterButton extends Component{
	state={
		clickCounter:0,

	};

	handleClick=()=>{
		this.setState({clickCounter:2,});
		console.log ("Click handled < value 2> ");
	};

	render(){
		const{clickCounter}=this.state;
		return(
			<div>
				<div>{clickCounter}</div>
				<button onClick={this.handleClick()}>
					+1
				</button>
			</div>
		)
	}
}


export default ModernCounterButton;
