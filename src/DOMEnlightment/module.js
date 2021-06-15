// object  literal
const Mercenary = {
  name: 'muter',
  proficency:'sniper',
  
  
};

const EnemyUnit = {
  type:'tank',
  
}

const augMerc = Object.create(Mercenary);
//figure out how it works
console.log(augMerc.proficency)

const superMerc = new Object();

console.log(superMerc.name)

Mercenary['weapon'] = 'bolter';

console.log(Mercenary);

Object.defineProperty(Mercenary, 'gear', {
  value: 'kracken grenades',
  writable: false,
  enumerable: true,
  configurable: false,
});





