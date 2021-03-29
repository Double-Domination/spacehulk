function inter(s1, s2) {
	let intersection = new Set();
	for (const current of s1) {
		if (s2.has(current)) {
			intersection.add(current);
		}
	}

	return intersection;
}

setA = new Set([1, 2, 1, 2, 4]);
setB = new Set([2, 3]);

console.log(inter(setA, setB));
