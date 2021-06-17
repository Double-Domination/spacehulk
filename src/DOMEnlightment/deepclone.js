const nestedObjForClone = {
  datafield: "some data",
  dataset: [1, 1, 3, 4, 5, 6, 7, ["nested2", "anoother el array nest lvl2"]],
  arowfunction: (param) => param,
  nestedobj: {
    nestedobj1: { param: "obj nest lvl 2" },
    nestedobj2: { param: "obj nest lvl 2 seccond" },
  },
  anonymousfunc: function (param) {
    return `aqired parm is ${param}`;
  },
};


const sample1 = {
  model: 'MAx G30P',
  acceleration:()=>'fast up to 35kmh'
};

const sample2 = {
  model:'m365 pro',
  acceleration:()=>'fast up to 30kmh'
}


const cloner = function (inputObj){
  return { ...inputObj };
};

let clonedMyScooter=cloner(sample1);
console.log(clonedMyScooter)


Object.defineProperty(sample1, 'tuning', {
  value: 'suspension',
  enumerable: true,
})

console.log(sample1)
console.log(clonedMyScooter)


let clonedXiaomi = { ...sample2 };
let clonedXiaomi2 = { ...sample2 };

console.log(sample2)
console.log(clonedXiaomi)
console.log(clonedXiaomi2)



Object.defineProperty(sample2, 'tuning', {
  value: 'monorim',
  enumerable:true
})


console.log(sample2)
console.log(clonedXiaomi)


const comparator = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  } else {
    return false;
  }
}


console.log(comparator(clonedXiaomi, sample2))



console.log(comparator(clonedXiaomi, clonedXiaomi2));


const jsonclone = (objToClone) => {
  return JSON.parse(JSON.stringify(objToClone));
}

const jscNinenebot = jsonclone(sample1);
const jscXiaomi = jsonclone(sample2);


console.log(jscNinenebot)
console.log(comparator(jscNinenebot, sample1))

console.log(jscXiaomi)
console.log(sample2)
console.log(comparator(jscXiaomi,sample2 ))


const mutipleScooters = Object.assign({}, sample2,sample1,sample2)
console.log(mutipleScooters)

//aoject assign ovverride same fields in object
