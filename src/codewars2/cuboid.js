// class Cube extends Cuboid {
//   constructor(length) {
//     super(length, length, length);
//   }
// }




class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    let result;

    const subCuboidFrontSideArea = this.width * this.height;
    const subCuboidTopSideArea = this.width * this.length;
    const subCuboidSideArea = this.height * this.length;
    result =
      subCuboidFrontSideArea * 2 +
      subCuboidTopSideArea * 2 +
      subCuboidSideArea * 2;

    return result;
  }

  get volume() {
    return this.length * this.height * this.width;
  }


  showEntries() {
//     let result = [];
//     for (const key in this) {
//         const element = this[key];
//         result.push(`${key} >>> ${element}`);
//     }

//     result = result.join(
//       `
// `);

//     return console.log(result);

    
    
    const result = Object.entries(this);
    return console.log(result.join('\n'));;
  }


  showMethods=()=> {
    const result = Object.getOwnPropertyDescriptor(this);
    return console.log(result);
  }


  showConstructor=()=> {
    const result = this.constructor;
    return console.log(result);
  }

  showDescriptors=()=> {
    const result = Object.getOwnPropertyDescriptors(this);
    return console.log(result);;
  }

  showPrototype=()=> {
    const result = Object.getPrototypeOf(this);
    return result;
  }

}

class Cubinator extends Cuboid{
  constructor(lendth, width, height) {
    super(lendth, width, height);
    
    this.cubinatorProp = ' this is cubinator';
  }
  
}





let metil = new Cuboid(2, 3, 4);
let extTest = new Cubinator(4, 3, 2);

//console.log(extTest.
//console.log(metil.constructor)

function dubas() {
  return "dolbas";
}

const stringifed = dubas.prototype;
console.log(stringifed);

//console.log(metil.showPrototype());
// metil.showinfo()

// metil.showM();

// metil.showEntries();

// metil.showConstructor();

// metil.showDescriptors();
// try to view prototype from different object

// let stealPrototype = metil.prototype;

// const toShowPrototype = Object.getOwnPropertyDescriptors(stealPrototype.prototype);
// console.log(toShowPrototype);







