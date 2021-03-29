var FilterString = function (value) {
	value = new String(value);
	let remover = new RegExp(/[^0-9]/g);
	let processedString = value.replace(remover, "");
	processedString = parseInt(processedString);
	return processedString;
};

console.log(FilterString("ksfng8766f43256ty7u8i9o0"));
