function validateUsr(username) {
	let res = new RegExp(/[a-z0-9_]/g);

	return res.test(username);
}

console.log(validateUsr("f0987"));

function validPass(password) {
	return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password)
		? "VALID"
		: "INVALID";
}
