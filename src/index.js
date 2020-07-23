/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Engine from './Engine'*/


class GenericForm extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
	        <form>
		        <label>
			        Name:
			        <input type="text" name="nameFromForm"/>
		        </label>
		        <input type="submit" value="Send it"/>
	        </form>
        );
    }
}




/**************************************/

ReactDOM.render (
	<GenericForm/>,
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



