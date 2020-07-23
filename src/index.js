/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Engine from './Engine'*/


class GenericForm extends React.Component{

	/*Controled component "One source of true" controlled component always represents STATE*/

    constructor(props){
        super(props);
        this.state={
        	valueFromInput:'',
        	valueTextarea:'',
	        controlSequence:'Activate Hammerhand!'
        };
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
    	this.setState({
		                  valueFromInput: event.target.value,
		                  valueTextarea: event.target.value,
        });

    	console.log(event);

    }

    handleSubmit(event){
    	alert('The name sent: ' + this.state.valueTextarea);
    	event.preventDefault();
    }


    render(){
        return(
	        <form onSubmit ={this.handleSubmit}   className="warning-banner">
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
	<GenericForm   />,
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



