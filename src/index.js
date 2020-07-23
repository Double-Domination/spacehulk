/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Engine from './Engine'*/

/*********************************/
function BoilingVerdict(props){
	if(props.celsius >= 100) {
		return (
			<p>The water is boiling</p>
		);
	}
	return (

		<p>Not enough temperature fo boliling</p>
	);
}



const scaleNames={
	c:'Celsius',
	f:'Farenheit',
};

class Calculator extends React.Component{
	constructor(props){
		super(props);

		this.state={
			temperature:'',
			scale:'c',
		};

		this.handleFarenheitChange=this.handleFarenheitChange.bind(this);
		this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
	}

	handleCelsiusChange(){
		this.setState({
			              temperature:temperature,
			              scale:'c',
			    });
	}

	handleFarenheitChange(){
		this.setState({
				    temperature:temperature,
					scale:'f',
			    });
	}


    render(){
		const scale       = this.state.scale;
		const temperature = this.state.temperature;
		const celsius=scale==='f' ? tryConvert(temperature, toCelsius()) : temperature;
		const farenheit=scale==='f' ? tryConvert(temperature, toFarenheit()) : temperature;
        return(
        	<div>
		        <TemperatureInput
			        scale="c"
			        temperature={celsius}
		            onTemperatureChange={this.handleCelsiusChange}
		        />
		        <TemperatureInput
			        scale="f"
			        temperature={farenheit}
			        onTemperatureChange={this.handleFarenheitChange}
		        />
		        <BoilingVerdict
			        celsius={parseFloat(celsius)}
		        />

	        </div>

        );
    }
}


function toCelsius(farenheit){
	return (
		(farenheit - 32) * 5 / 9
	);
}

function toFarenheit(celsius){
	return (
		(celsius * 9 / 5) + 32
	);
}

function tryConvert(teperature, convert){
    const input = parseFloat(teperature);
	if((Number.isNaN (input))) {
		return (
			''
		);
	}
	
	const output = convert(input);
	const rounded = Math.round(output * 1000)/1000;
	return (
		rounded.toString ()
	);
}



class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

	handleChange(e){
    	this.props.onTemperatureChange(e.target.value);
	}




    render(){
		const temperature = this.props.temperature;
		const scale       = this.props.scale;
        return(
        	<fieldset>
		        <legend >Just enter temperature in <b>{scaleNames[scale]}</b> degrees</legend>
		        <input type="text"
		               value={temperature}
		               onChange={this.handleChange}
		        />
		        <BoilingVerdict
		            celsius={parseFloat(temperature)}
		        />
	        </fieldset>
	        
        );
    }
}


class Reservation extends React.Component {
	constructor(props) {
		super (props);
		this.state=({
			            isGoing: true,
			            numberOfGuests: 2,
		            });

		this.handleInputChange=this.handleInputChange.bind(this);

	}

	handleInputChange(event){
		const target = event.target;
		const value  =target.name==='isGoing' ? target.checked : target.value;
		const name   = target.name;

		this.setState({
				    [name]:value,
			    });

	}


	render() {
		return (
			<form >
				<label>
					Im going to
					<input
						type="checkbox"
				         name="isGoing"
						checked={this.state.isGoing}
					    onChange={this.handleInputChange}
					/>
				</label>
				<br/>
				<label>
					Number of Guests
					<input
						type="number"
						name="numberOfGuests"
						value={this.state.numberOfGuests}
					    onChange={this.handleInputChange}
					/>
				</label>
			</form>
		);
	}
}


class FlavorForm extends React.Component {
	constructor(props) {
		super (props);
		this.state = {value: 'coconut'};

		this.handleChange = this.handleChange.bind (this);
		this.handleSubmit = this.handleSubmit.bind (this);
	}

	handleChange(event) {
		this.setState ({value: event.target.value});
	}

	handleSubmit(event) {
		alert ('Ваш любимый вкус: ' + this.state.value);
		event.preventDefault ();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Выберите ваш любимый вкус:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">Грейпфрут</option>
						<option value="lime">Лайм</option>
						<option value="coconut">Кокос</option>
						<option value="mango">Манго</option>
					</select>
				</label>
				<input type="submit" value="Отправить"/>
			</form>
		);
	}
}


class SFlavorForm extends React.Component {
	constructor(props) {
		super (props);
		this.state = {value: 'vodka'};

		this.handleChange = this.handleChange.bind (this);
		this.handleSubmit = this.handleSubmit.bind (this);

	}

	handleChange(event) {
		this.setState ({value: event.target.value});
	}

	handleSubmit(event) {
		console.log ('Your most preferable taste is ' + this.state.value);
		event.preventDefault ();
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Choose your most preferable taste:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grape">Grape</option>
						<option value="lime">Lime</option>
						<option value="cake">Cake</option>
						<option value="vodka">Vodka</option>
					</select>
					<input type="file"/>
				</label>
				<input type="submit" value="Send it"/>

			</form>
		);
	}
}


class GenericForm extends React.Component {

	//Controled component "One source of true" controlled component always represents STATE

	constructor(props) {
		super (props);
		this.state        = {
			valueFromInput: '',
			valueTextarea: '',
			controlSequence: 'Activate Hammerhand!',
		};
		this.handleChange = this.handleChange.bind (this);
		this.handleSubmit = this.handleSubmit.bind (this);
	}

	handleChange(event) {
		this.setState ({
			               valueFromInput: event.target.value,
			               valueTextarea: event.target.value,
		               });

		console.log (event);

	}

	handleSubmit(event) {
		alert ('The name sent: ' + this.state.valueTextarea);
		event.preventDefault ();
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit} className="warning-banner">
				<label>
					Name:
					<input
						type="text"
						value={this.state.valueFromInput}
						onChange={this.handleChange}

					/>
				</label>
				{<textarea
					value={this.state.valueTextarea}
					onChange={this.handleChange}
				/>}
				<input
					type="submit" value={this.state.controlSequence}
				/>

			</form>
		);
	}
}


/**************************************/

ReactDOM.render (
	<Calculator />,

	document.getElementById ('root'),
);

/**************************************/



/*

 const  posts=[
 {id:1, title: ' Hi , nice to see you', content: 'Welcome to documentation'},
 {id:1, title: ' Installing....', content: 'React can be installed by npm'},
 ];



 const content=posts.map(
 (curPost)=><Post key={curPost.id} id={curPost.id} title={curPost.id}/>
 );

 function Post(props){
 return (
 <div>
 <h3>{props.title}</h3>
 </div>
 );
 }



 function Blog(props){
 const sidebar=(
 <ul>
 {
 props.posts.map((post)=>
 <li key={post.id}>{post.title}</li>
 )
 }
 </ul>
 );

 const content=props.posts.map(
 (post)=>
 <div key={post.id}>
 <h3>{post.title}</h3>
 <p>{post.content}</p>
 </div>
 );

 return (
 <div>
 {sidebar}
 <hr/>
 {content}
 </div>
 );
 }





 const randomArray=[1,5,37,7,3,6,3,"hghsh", 6, 7,7];


 function NumberList(props) {
 const numbers = props.numbers;
 return (
 <ul>
 {numbers.map((curNumber) =>
 <ListItem
 key={curNumber.toString()}
 value={curNumber}
 />
 )}
 </ul>
 );
 }





 function ListItem(props) {
 return <li>{props.value}</li>;
 }
 */

/*function NumberList(props) {
 const numbers = props.numbers;
 const listItems = numbers.map ((number) =>
 <ListItem key={number.toString ()} value={number}/>,
 );
 return (
 <ul>
 {listItems}
 </ul>
 );
 }*/
/*

 const numbers = [
 1,
 2,
 3,
 4,
 5,
 ];
 */



