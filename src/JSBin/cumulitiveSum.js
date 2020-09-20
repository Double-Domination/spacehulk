

function cumulitiveSum(addendum){
	let accumulator=addendum;
	function accumulate(value){
		accumulator+=value;
		console.log (accumulator);
		return accumulate;

	}
	console.log (accumulator);
	return accumulate;

}

cumulitiveSum(1);
cumulitiveSum(1)(2)(2)('k');









function multipleLog(p){
	console.log (p);
	return multipleLog;
}

//multipleLog(4)(3)(2)(1);