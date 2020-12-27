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

console.log(Boroz.stigma);

//global Symbol db ----- let id =Symbol.for('id');
// let anotherId =Symbol.for('id');
// anotherId===id ---- true
