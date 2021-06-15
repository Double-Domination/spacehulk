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


const PROPMOD = {
  'wce': {
    writable: true,
    configurable: true,
    enumerable:true,
  },
  'wc': {
    
    writable: true,
    configurable: true,
    enumerable: false,
  },
  'w': {
    writable:true,
    configurable: false,
    enumerable: false,
  },
  'frozen': {
    writable:false,
    configurable: false,
    enumerable: false,
  },
}


const metallArmor = Object.create(Object.prototype);

Object.defineProperty(metallArmor, 'alloy',PROPMOD.wce);


console.log(metallArmor)


const  utils={
       'showInfo': function() {
         return Object.values(this);
       },
}


const Marine = Object.create(utils);

Object.defineProperty(Marine, 'armor', PROPMOD.wce);
console.log(Marine);
Marine.armor = 'terminator';
console.log(Marine)
console.log(Marine.showInfo());
console.log(Marine.showInfo);




