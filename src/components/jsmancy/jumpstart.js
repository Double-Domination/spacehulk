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
	this.heavyWeapon = heavyWeapon;
}

TacticalMarine.prototype = Object.create(ScoutMarine.prototype);
TacticalMarine.prototype.constructor = TacticalMarine;

var Thaddeus = new TacticalMarine("Thaddeus", 300, "lightning claws");

//Thaddeus.callsign();
// console.log(Thaddeus.astartesNic);
// Boreale.callsign();

TacticalMarine.prototype.meltabomb = function (targetEnemyVehicle) {
	meltabombIsAviable = true;
	if (meltabombIsAviable === true) {
		console.log(
			this.astartesNic + " is using melatabomb on " + targetEnemyVehicle,
		);
		this.meltabombIsAviable = false;
	} else {
		console.log("You alredy used your meltabomb!");
	}
};

console.log(Thaddeus.meltabombIsAviable);
Thaddeus.meltabomb("BaneBlade");
console.log(Thaddeus.meltabombIsAviable);

Thaddeus.meltabomb("BaneBlade");
