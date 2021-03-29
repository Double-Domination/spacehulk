function catMouse(map, moves) {
	function buildMap(map) {
		let resultingMap = [];
		map = map.split("\n");
		for (const currentRow of map) {
			row = currentRow.split("");
			resultingMap.push(row);
		}
		map = resultingMap;
		return map;
	}

	map = buildMap(map);

	console.log(map);

	function findPosition(coordinateMap, charToFind) {
		let position;
		for (let y = 0; y < coordinateMap.length; y++) {
			//row position
			let x = coordinateMap[y].indexOf(charToFind); //colon position
			if (x !== -1) {
				position = {
					x: x,
					y: y,
				};
			}
		}

		if (typeof position === "undefined") {
			return "not finded";
		}
		return position;
	}

	let catInitPos = findPosition(map, "C");
	let mouseInitPos = findPosition(map, "m");
	console.log(catInitPos);
	console.log(mouseInitPos);
	function calculateOffsets(cat, mouse) {
		let offsetX = cat.x - mouse.x;
		let offsetY = cat.y - mouse.y;
		console.log(`x:${offsetX} y:${offsetY}`);
		let overallOffset = Math.abs(offsetX) + Math.abs(offsetY);
		//console.log(overallOffset);
		return overallOffset;
	}

	let globalOffset = calculateOffsets(catInitPos, mouseInitPos);
	console.log(globalOffset);

	if (catInitPos === "not finded" || mouseInitPos === "not finded") {
		return "boring without two animals";
	} else if (moves >= globalOffset) {
		return "Caught!";
	} else if (moves < globalOffset) {
		return "Escaped!";
	}
}

let bat4 = `...........
...........
...........
...........
...........
.........m.
...........
...........
...........
..........C
...........
...........
...........
...........`;

console.log(catMouse(bat4, 5));
//console.log(catMouse(bat4, 49));
