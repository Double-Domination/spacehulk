/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Engine from './Engine'*/



let pycharm=[];
let gemcharm=[];
let jscharm=[];


jscharm.map((mapArg) =>{
        
    } );


const content=posts.map(
	(post)=><Post key={post.id} id={post.id} title={post.id}/>
);



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


const  posts=[
	{id:1, title: ' Hi , nice to see you', content: 'Welcome to documentation'},
	{id:1, title: ' Installing....', content: 'React can be installed by npm'},
];




function ListItem(props) {
	return <li>{props.value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map ((number) =>
       <ListItem key={number.toString ()} value={number}/>,
	);
	return (
		<ul>
			{listItems}
		</ul>
	);
}

const numbers = [
	1,
	2,
	3,
	4,
	5,
];
ReactDOM.render (
	<Blog posts={posts}/>,
	document.getElementById ('root'),
);

/**************************************/
