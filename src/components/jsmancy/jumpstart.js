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

console.log("*******************************");
Thaddeus.meltabomb("BaneBlade");
Thaddeus.meltabomb("Lemanruss");
Thaddeus.meltabomb("Lemanruss");
console.log("*******************************");

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

Eprael.showCurrentHp();
