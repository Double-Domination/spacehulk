function killer(suspectInfo, dead) {
	let checklist = [];

	let result;
	for (const currentPerson in suspectInfo) {
		if ((Object.hasOwnProperty.suspectInfo, currentPerson)) {
			const element = suspectInfo[currentPerson];
			console.log(element);
			if (
				dead.every((current) => {
					console.log(current);
					return element.includes(current);
				})
			) {
				result = String(currentPerson);

				console.log(result);
			}
		}
	}

	return result;
}

let killed = ["Bill", "Lucas"];
let persons = {
	James: ["Bill", "Lucas", "pedro"],
	Johnny: ["David", "Kyle", "Lucas"],
	Peter: ["Lucy", "Kyle"],
};

console.log(killer(persons, killed));
