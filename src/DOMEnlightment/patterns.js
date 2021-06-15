'use strict';



// structure decorator facade flyweight adapter proxy

//Behaviral Iterator mediator observer visitor

// Creation Constructor , factory , Abstract factory , prototype, single , buider



const SpaceMarine = class {
  constructor(hp=2, weapon='bolter') {
    this.hp = hp;
    this.weapon = this.weapon;
    this.armorSave
  }
  performAttack(target) {
    // TODO make inderect modification
    target.hp -= this.weapon.fireAtTarget;
  }
}

const D6 = 7; // classic dice cube wit 6 possible resulting values

const dice = class {
  constructor(_diceType) {
    this.diceType = _diceType;
  }

  rollTheDice() {
    return Math.random() * (this._diceType - 1) + 1;
  }
}

const WeaponBolter = class {
  constructor() {
    this.strength = 4;
    this.armorPircing = 0;
    this.firingType = 2;// TODO need to create class Rapidfire Assault Pistol Heavy temproary
    this.damage = 1;
    this.range = 24;
  }

  fireAtTarget(target) {
    //check range

    //to hit roll


    //to wound roll

    // saving trows

    // another Possibale Saving actions

    // mayBe FNP trows. Command rerolls . Stratagems, relics and so on an so forth
  }
  
}