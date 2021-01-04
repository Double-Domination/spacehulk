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
	this.currentWeapon = false;
	this.eqipWeapon = function (weaponToEqip) {
		weaponToEqip.eqipped = true;
		weaponList.push(weaponToEqip);
		this.currentWeapon = false; // clean prevoius weapon
		Object.assign(this.currentWeapon, weaponToEqip); // copy currnt weapon in to instace
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
	allocateAttack: function (attackTarget) {
		if (this.currentWeapon.weaponName !== false) {
			console.log(
				`using ${this.currentWeapon.weaponName}  on ${attackTarget}`,
			);
			attackTarget.hp -= this.currentWeapon.damage;
			console.log(`attack sucssesfull target hp ${attackTarget.hp}`);
		} else {
			console.log(`weapon is not eqipped yet!!`);
		}
	},
};

var relicPowerSword = {
	weaponName: "Power Sword Of Great Power",
	strength: 5,
	armorPiercing: 3,
	damage: 2,
};

var grimaldus = new Chaplain("Grimaldus");
// grimaldus.eqipWeapon(relicPowerSword);
// grimaldus.showEqipedWeapons();
// grimaldus.callsign();

// grimaldus.allocateAttack(Boroz);
// method overriding

//console.log('________________');
//console.log(Object.keys(Boroz));

//Creature ->MovingGameObject ->DrawableGameObject -> GameObject
// Psyker -> MovingGameObject -> DrawableGameObject
function GameObject(nameOfTheGame) {
	this.nameOfTheGame = nameOfTheGame;
}

function DrawableGameObject(sprite) {
	GameObject.call(this, "Supa Straategy");
	this.sprite = sprite;
}

DrawableGameObject.prototype = Object.create(GameObject.prototype);
DrawableGameObject.prototype.constructor = DrawableGameObject;

//specific DrawableGameObject
DrawableGameObject.prototype.draw = function () {
	console.log(`Drawing sprite: ${this.sprite}`);
	//draw sprite
};

// Helper position class
function Position(x, y) {
	this.x = x;
	this.y = y;
}

//
Position.prototype.currentCoordinates = function () {
	console.log(` Curent position ${this.x} + ${this.y}`);
};

//Gamegobject class
function MovingGameObject(position, sprite) {
	DrawableGameObject.call(this, sprite);
	this.position = position;
}

//Establishing prototypes

MovingGameObject.prototype = Object.create(DrawableGameObject.prototype);

MovingGameObject.prototype.constructor = MovingGameObject;

// Adding new method to proto
MovingGameObject.prototype.movesTo = function (newPosition) {
	this.position = newPosition;
	console.log(`${this} moves to ${newPosition}`);
};

function Psyker(name, position, sprite, hp = 100) {
	// Call base type constuctor
	MovingGameObject.call(this, position, sprite);
	this.name = name;
	this.hp = hp;
}

Psyker.prototype = Object.create(MovingGameObject.prototype);
Psyker.prototype.constructor = Psyker;

function Librarian(name, position, sprite) {
	// Call base type constructor
	Psyker.call(this, name, position, sprite);
}

//prototype
Librarian.prototype = Object.create(Psyker.prototype);
Librarian.prototype.constructor = Psyker;

//Librarian specific
Psyker.prototype.heal = function (target) {
	console.log(`${this.name} heals ${target.name} +50 hp> ${target.hp}`);
	target.hp += 50;
};

// Psyker specific
Librarian.prototype.castsSmite = function (target) {
	console.log(`${this.name} Casts smite on ${target.name}`);
	if (target.appliedEffects) {
		target.appliedEffects.push("smite");
		target.appliedEffects.push("energized");
	} else {
		target.appliedEffects = ["smite", "energized"];
	}
};

Librarian.prototype.heal = function (target) {
	// call baseclass heals method
	Psyker.prototype.heal.call(this, target);

	console.log(` ${this} cleanses all negative effects in ${target}`);
	target.appliedEffects = [];
	console.log(`All negative effects vancvicsshed [ ${target.name} ]`);
};

//console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

//var borzugan = new Librarian("Borzugan", new Position(0, 0), "borzugan.jpg");
//borzugan.draw();
// borzugan.heal(borzugan);
// borzugan.castsSmite(borzugan);
// console.log(borzugan.appliedEffects);

// borzugan.heal(borzugan);

//console.log(borzugan.appliedEffects);
//console.log(borzugan.appliedEffects);

const MasterOfSancticity = {
	hitPoints: 40,
};

console.log("******************");

boltPistol = {
	weaponName: "boltpistol",
	weaponType: "pistol",
	strength: 4,
	armorPiercing: 0,
	damage: 1,
};

chainsword = {
	weaponName: "chainsword",
	weaponType: "mele",
	strength: "user",
	armorPiercing: 1,
	damage: 1,
};

function readonly(target, key, descriptor) {
	descriptor.writable = false;
	return descriptor;
}

class BaseHero {
	constructor(heroName, wargear, heroType) {
		this.heroName = heroName || "BlackShield";
		this.wargear = wargear || { boltPistol, chainsword };
		this.heroType = heroType || "capitan";
		this.hp = 4;
	}

	callsign() {
		console.log(`-=${this.heroType} ${this.heroName} is reporting=-`);
	}

	showStats() {
		console.log(
			`${this.heroName}  currenthp = ${
				this.hp
			} eqipped weapons: ${Object.keys(this.wargear)}`,
		);
	}
}

var bazel = new BaseHero("Bazel");
bazel.callsign();
bazel.showStats();
