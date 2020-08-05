/**
 * Created by Админ on 7/25/2020.
 */


/*nodeschool.io*/

/*Log this and event of target*/

class SaveButton extends React.Component {
	handleSave(event) {
		console.log (this, event);
	}

	render() {
		return <button onClick={this.handleSave.bind (this)}>
		Save
		</button>;
	}
}

class Mouse extends React.Component {
	render() {
		return <div>
					<div
						style={{border: '1px solid red'}}
						onMouseOverCapture={((event) => {
							console.log ('mouse over on capture event');
							console.dir (event, this);
						}).bind (this)}

						onMouseOver={((event) => {
							console.log ('mouse over on bubbling event');
							console.dir (event, this);
						}).bind (this)}
					>
						Open DevTools and move your mouse cursor over here
					</div>
				</div>;
	}
}




