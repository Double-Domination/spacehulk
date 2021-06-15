'use strict';

const mod = (function () {
  let privateName = 'secret agent';
  let prvateArmortype = 'armor of chadows';

  return {
    setName: (nick) => {
      privateName = nick;
      console.log("Name changed " + privateName);
    },
    setArmorType: (armorType) => {
      prvateArmortype= armorType;
      console.log('Armor type changed ' + prvateArmortype);
    },
  }
})()

mod.setArmorType('relic');

console.log(
  
  mod.privateName
)
