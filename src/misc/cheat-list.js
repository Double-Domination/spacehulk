/**
 * Created by Админ on 7/24/2020.
 */
function ButtonClickable(props){
	let button={
		clicked:false,
		click: function () {
			this.clicked=true;
			assert(button.clicked, "the button has been clicked")
		},

	};
	let elem=document.getElementById("test");
	elem.addEventListener("click", button.click.bind(button));
	let boundFunction=button.click.bind(button);
	assert(boundFunction!==button.click, "Calling bind creates a completly new function");
	let clonnnedElem=elem.cloneNode(true);
	let clonnnedElem=elem.removeChild(elem);

	return (
		<buttton id="test">

			here bounded event listener
		</buttton>
	);

	/*
	JQuery
	$(document.body).append{
		"<div>Some markup here</div>"
	}*/

	/*oldschool way*/

	const h1=document.createElement("h1");
	h1.textContent="H1 inner text";

	const p =document.createElement("p");
	p.textContent="Paragraph inner text";

	const div=document.createElement("div");

	div.appendChild(h1);
	div.appendChild(p);
	document.appendChild(div);

}



function domDelectorEngaged() {


	return (
		<select
			name="dom-select-example"
			id="dom-exapmple-selector">
		<option value="ss">
		ss
		</option>
		<option value="ee">
			ee
		</option>
		<option value="zztop">
			zztop
		</option>
	</select>
	);
}






