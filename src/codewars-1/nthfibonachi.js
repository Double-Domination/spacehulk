function nthFibo(n) {
	n = n - 1;
	const PHI = (1 + Math.sqrt(5)) / 2;
	//console.log(PHI);

	let nth = (Math.pow(PHI, n) - Math.pow(-PHI, -n)) / Math.sqrt(5);
	nth = Math.round(nth);
	return nth;
}

console.log(nthFibo(11));

let fib = [0, 1, 1, 2, 3, 5, 8, 13, 21];

//console.log(Math.pow(2,3));
