/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





/*Prototype of -=srate=-
+initial products list
+ search request(user input)
+ checkbox state
+ filtered list of products

array. map
console representation in jsx
event object fields
passing methods as props
composition three training
bootstrap quick run

============================

++search request
++ checkbox state


 */

function IntMain(props) {
	return (
		<FilterableProductTable products={PRODUCTS} />
	);
}








const PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
	<IntMain/>,
	document.getElementById('root')
);
