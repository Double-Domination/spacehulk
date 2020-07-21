/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Engine from './Engine'




function activateWeaponSystem(props) {
	function activateLasers() {
		console.log ("Pew, pew ");
	}
	return (
		<button onClick={activateLasers}>
			Press to activate
		</button>
	);
}

function ActionLink() {
	function handleClick(e) {
		e.preventDefault();
		console.log ("Handle click haz been activated ");
	}

	return (
		<a href="#" onClick={handleClick()}> Press me</a>
	);
}





function App() {
	return (
		<div>
			<Clock refreshRate="1000"/>
			<Toggle/>
		</div>
	);
}


class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state={isToggleOn:true};
		//this must be binded to object enviroment. Oterwise it didnt work
		this.handleClick= this.handleClick.bind(this);
	}

	handleClick(){
		this.setState((state)=>({
			isToggleOn:!state.isToggleOn,
		}));
	}


	render(){
		return(
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'on' : 'of'}
			</button>
		);
	}
}


class Clock extends React.Component{
    constructor(props) {
	    super (props);
	    this.state = {
		    date: new Date (),
		    smth: "Something valueble here",
	    };
    }
        componentDidMount(){
		    this.timerID=setInterval(
			    ()=>this.tick(), this.props.refreshRate
		    );
	    }

        componentWillUnmount(){
			clearInterval(this.timerID);
	    }

	    tick(){
        	this.setState({
                date: new Date(),
            });
	    }

    render(){
        return(
	        <div>
		        <h1>Hail to the King</h1>
		        <h2>Now is {this.state.date.toLocaleString ()}</h2>
		        <h3>Display something from state here: {this.state.smth}</h3>
	        </div>
        );
    }
}


function Avatar(props) {
	return (
		<img
			className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	);
}


function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user}/>
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	);
}






function Welcome(props) {
	return <h1>Hail, {props.hail}</h1>
}



function Square(props) {
	return (

		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}




class Board extends React.Component {



	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		return (
			<div>

				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props){
		super(props);
		this.state={
			history:[{
				squares: new Array(9).fill(null),
			}],
			stepNumber:0,
			xIsNext:true,
		}
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber+1);
		const current=history[history.length-1];
		const squares=current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			console.log("Game ended ");
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
						history:history.concat([{
							squares:squares,
                        }]),

						stepNumber:history.length,
                        xIsNext: !this.state.xIsNext,
		              });
	}

	jumpTo(step){
		this.setState({
			stepNumber: step,
			xIsNext:(step%2)===0,
        });
	}

	render() {

		const history=this.state.history;
		const current = history[this.state.stepNumber];
		const winner=calculateWinner(current.squares);

		const moves =history.map((step, move)=>{
			const desc=move ?
				'Jump to turn #'+ move:
				'Restart';
			return(
				<li key={move}>
					<button onClick={()=>{this.jumpTo(move)}}>
					{desc}
					</button>
				</li>
			);
		});

		let status;
		if(winner){
			status = 'The winner is ' + winner;
		}else{
			status= 'Next turn: ' +(this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<>
			<div className="game">

				<div className="game-board">
					<Board
						squares={current.squares}
					    onClick={(i)=>{this.handleClick(i)}}

					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
			<Engine/>
			<Welcome hail="CALDOR!"/>
			<Welcome hail="DOMINATOR!"/>
			<Welcome hail="MAGOS!"/>

			</>
		);
	}
}




ReactDOM.render(
	<App/>,

	document.getElementById('root'));






function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
