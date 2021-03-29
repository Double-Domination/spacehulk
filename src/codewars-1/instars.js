function starSign(date) {
	let month = date.getMonth();
	month += 1;
	console.log(month);
	let day = date.getDay();
	day += 1;

	console.log(day);
	if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
		// const capricorn = ["22.12", "20.01"];
		return "Capricorn";
	} else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
		// const aquaris = ["21.01", "19.02"];
		return "Aquarius";
	} else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
		// const pisces = ["20.02", "20.03"];
		return "Pisces";
	} else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
		// const aries = ["21.03", "20.04"];
		return "Aries";
	} else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
		// const taurus = ["21.04", "21.05"];
		return "Taurus";
	} else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
		// const gemini = ["22.05", "21.06"];
		return "Gemini";
	} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
		//  ["22.06", "22.07"];
		return "Cancer";
	} else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
		// const leo = ["23.07", "23.08"];
		return "Leo";
	} else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
		// const virgo = ["24.08", "23.09"];
		return "Virgo";
	} else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
		// const libra = ["24.09", "23.10"];
		return "Libra";
	} else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
		// const scorpio = ["24.10", "22.11"];
		return "Scorpio";
	} else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
		// const sagittarius = ["23.11", "21.12"];
		return "Sagittarius";
	}
}

let gem = new Date(1970, 5, 5);
let aqua = new Date(2000, 1, 15);
let leo = new Date(1987, 7, 23);

console.log(starSign(gem));
console.log(starSign(aqua));
console.log(starSign(leo));
