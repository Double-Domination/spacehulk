/**
 * Created by Админ on 7/18/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const PRODUCTS=[
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


/*
* SearchCard
* SearchBar
* ResultBar
* SubcategorySearchResult
* SearchProductResult
*
* FilterableProductTable
*   SarchBar
*   ProductTable
*       ProductCategoryRow
*       ProductRow
* */


class ProductCategoryRow extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
    	const category = this.props.category;
        return(
	        <tr>
				<th colSpan="2">
					{category}
				</th>
			</tr>
        );
    }
}

class ProductRow extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
    	const product = this.props.product;
    	const productName= product.stocked ? product.name:
		    <span style={{color:'red'}}>
		        {product.name}
		    </span>;
        return(
	        <tr>
            	<td>{productName}</td>
            	<td>{product.price}</td>
            	</tr>
        );
    }
}

class ProductTable extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
    	const rows = [];
    	let lastCategory = null;
    	
    	this.props.products.forEach((product) =>{
		    if(product.category !== lastCategory) {
		    	rows.push(
		    		<ProductCategoryRow
					    category={product.category}
				        key={product.category}
				    />
			    );
		    }
		    rows.push(
		    	<ProductRow
				    product={product}
			        key={product.name}
			    />
		    );

		    lastCategory=product.category;
	    } );
    	
        return(
	        <table>
		        <thead>
		            <tr>
            	        <th>Name</th>
            	        <th>Price</th>
            	    </tr>
		        </thead>
		        <tbody>{rows}</tbody>
	        </table>
        );
    }
}


class SearchBar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
	        <form>
		        <input
			        type="text"
                    palceholder="Search......"
                />
            	<p>
		            <input type="checkbox"

                    />
		            {' '}
		            Only show products in stock
	            </p>
            </form>
        );
    }
}


class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
	        <div>
		        <SearchBar/>
		        <ProductTable
		            products={this.props.products}
		        />
	        </div>
        );
    }
}

ReactDOM.render(
	<FilterableProductTable products={PRODUCTS}/>,
	document.getElementById('root')
);
