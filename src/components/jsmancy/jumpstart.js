function ScoutMarine(astartesNic, hp) {
	this.astartesNic = astartesNic;
	this.hp = hp;
	// console.log("executed");
}

ScoutMarine.prototype.callsign = function () {
	console.log(this.astartesNic + " is here");
	// console.log("callsign exec");
};

var Boreale = new ScoutMarine("Boreale", 200);
var Diomedes = new ScoutMarine("Diomedes", 250);
//Boreale.callsign();
//Diomedes.callsign();

//console.log(Diomedes instanceof ScoutMarine);

function TacticalMarine(astartesNic, hp, heavyWeapon) {
	ScoutMarine.call(this, astartesNic, hp);
	this.meltabombCount = 2;
	this.heavyWeapon = heavyWeapon;
}

TacticalMarine.prototype = Object.create(ScoutMarine.prototype);
TacticalMarine.prototype.constructor = TacticalMarine;

var Thaddeus = new TacticalMarine("Thaddeus", 300, "lightning claws");

//Thaddeus.callsign();
// console.log(Thaddeus.astartesNic);
// Boreale.callsign();

TacticalMarine.prototype.meltabomb = function (targetEnemyVehicle) {
	if (this.meltabombCount > 0) {
		console.log(
			this.astartesNic + " is using melatabomb on " + targetEnemyVehicle,
		);
		this.meltabombCount--;
	} else {
		console.log("You already used all your meltas!");
	}
};

// console.log("*******************************");
// Thaddeus.meltabomb("BaneBlade");
// Thaddeus.meltabomb("Lemanruss");
// Thaddeus.meltabomb("Lemanruss");
// console.log("*******************************");

class TerminatorMarine extends ScoutMarine {
	constructor(astartesNic, hp) {
		super(astartesNic, hp);
		this.hp += 200;
	}
	showCurrentHp() {
		console.log("Current HP is " + this.hp);
	}
}

var Eprael = new TerminatorMarine("Ephrael", 100);

//Eprael.showCurrentHp();

function nonPrimarisAstartes(
	forceName = (() => `$$$  ${this.name}`)(),
	hp = 1,
	armorType = "scout",
) {
	let position = { vertical: 0, horizontal: 0 };
	let currentSquadName = toString();
	return {
		forceName,
		hp,
		armorType,
		showStats() {
			console.log("exec");

			for (const property in this) {
				if (property !== "showStats") {
					console.log(" $$ " + property + " -- " + this[property]);
				}
			}
		},
	};
}

var Archibael = new nonPrimarisAstartes();
//Archibael.showStats();
//console.log(Archibael);
//console.log("fff " + Archibael.name);

function AutoNamedSquad(hp, armorType) {
	//this.squadronName = this.function.name;
	//console.log(this.function.name);
	this.hp = hp;
	this.squarNic = Object.getOwnPropertyDescriptor(this, "length");
	this.armorType = armorType;
	this.showStats = function () {
		console.log("exec");

		for (const property in this) {
			if (property !== "showStats") {
				console.log(" $$ " + property + " -- " + this[property]);
			}
		}
	};
}

var Zephrael = new AutoNamedSquad(100, "Terminator armor");

// Zephrael.showStats();

//console.log("**********************");
// console.log("ZZ " + Zephrael.name);

// function jftp() {
// 	console.log("SSSS " + this.name);
// }

// jftp();

var forwardSymbol = Symbol("forward");
var backwardSymbol = Symbol("backward");

var first = 1,
	second = 1;
//console.log(second === first);

//console.log(descriptorSymbol);

//console.log(descriptorSymbol.toString());

const isEqual = first === second ? "true" : "false";
//console.log(isEqual);

var database = {
	firstName: "Endrid",
};

var Sidentifer = Symbol("symbolicIdentifer");

database[Sidentifer] = "When im purging";

// console.log(database[Sidentifer] + " Sym ind");
// console.table(database + " DB");

class withSymbols extends ScoutMarine {
	constructor(squadNic, squadHp, stelalth) {
		super(squadNic, squadHp);
		this.stigma = Symbol(squadNic);
		this.showStats = function () {
			console.log("exec");

			for (const property in this) {
				if (property !== "showStats") {
					console.log(" $$ " + property + " -- " + this[property]);
				}
			}
		};
	}

	stealthEnabled(stealth) {
		let currentStateOfStealth = stealth;
		if (stealth === true) {
			console.log("Your squad is invisible");
		} else {
			console.log("Stealth is deactivated now");
		}
	}
}

var Boroz = new withSymbols("Boroz", 100, true);

//console.log(Boroz.stigma);

//global Symbol db ----- let id =Symbol.for('id');
// let anotherId =Symbol.for('id');
// anotherId===id ---- true

//TODO create a manual analog og 'new' operator (new simply attaching 'this' cotext to function constructor)
// Factory??
function constructorLike(passedObj) {
	let temporalObj = passedObj;
	temporalObj.property = 1;
	temporalObj.option = "optional weapon";
	let resultingObj = temporalObj;

	return resultingObj;
}

//object factories

function AssaultSquad(squadNic, hp = 100) {
	let position = Symbol("position");
	this[position] = { x: 0, y: 0 };

	this.hp = hp;
	this.squadNic = squadNic;
	this.callsignSquad = function () {
		console.log(
			`Squad ${this.squadNic}  is reporting (${this.hp} current hp)`,
		);
	};

	this.changePosition = function (x, y) {
		console.log(
			`changing position from - ${this[position].x} | ${this[position].y} ...`,
		);
		this[position].x = x;
		this[position].y = y;

		console.log(
			`Position changed to -${this[position].x} | ${this[position].y} ...`,
		);
	};
}

var clonatiums = new AssaultSquad("Cyprus", 200);

//clonatiums.callsignSquad();
//clonatiums.changePosition(8, 5);

function VenerableDreadnout(
	dreadnoutName,
	hp = 400,
	{ cqc, ranged } = { cqc: "claws", ranged: "bolter" },
) {
	return {
		dreadnoutName: dreadnoutName,
		hp: hp,
		weapons: function () {
			console.log(`
			purging heretics in close combat with ${cqc}
			Also Heretics can be purged with ${ranged}
			`);
		},
	};
}

var bascicDreadnoutWeapons = {
	cqc: "Storm fangs of Wolf Gang",
	ranged: "Assault canon",
};

var orama = VenerableDreadnout("Venerable Orama", 500);
// orama.weapons();

function augmentator(constructorFn) {
	return function () {
		return new constructorFn(...arguments);
		// return new (constructorFn.bind.apply(null, arguments));
	};
}

function Chaplain(heroName) {
	//private via closure
	var weaponList = [],
		hp = 200;

	//public
	this.heroName = heroName;
	this.heroClass = "master of sanctity";
	this.eqipWeapon = function (weaponToEqip) {
		weaponToEqip.eqipped = true;
		weaponList.push(weaponToEqip);
		console.log(` ${this.heroName} grabs a ${weaponToEqip.weaponName} `);
	};

	this.showEqipedWeapons = function () {
		console.log(" Trying to find eqipment");
		if (weaponList.length > 0) {
			return console.log(` ${this.heroName}.... have some weapons
			looks like ${weaponList.find((w) => w.eqipped).weaponName}
			`);
		} else {
			return console.log(` ${this.heroName} looks disarmed`);
		}
	};
}

//prototype
Chaplain.prototype = {
	constructor: Chaplain,
	callsign: function () {
		console.log(`Chaplain ${this.heroName} is ready for action`);
	},
};

var relicPowerSword = {
	weaponName: "Power Sword Of Great Power",
	strength: 5,
	armorPiercing: 3,
	damage: 2,
};

var grimaldus = new Chaplain("Grimaldus");
grimaldus.eqipWeapon(relicPowerSword);
grimaldus.showEqipedWeapons();
grimaldus.callsign();
