// var length = 2;

// //area
// var area = length ** 2;
// console.log(`Area of length ${length} is ${area}`);
// //volume

// var volume = length ** 3;
// console.log(`volume of length ${length} is ${volume}`);

class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return this.length ** 2;
  }

  set surfaceArea(recivedArea) {
    const resultingLength = Math.sqrt(recivedArea);
    return (this.length = resultingLength);
  }

  get volume() {
    return this.length ** 3;
  }

  set volume(recivedVolume) {
    const resultingLength = Math.cbrt(recivedVolume);
    return (this.length = resultingLength);
  }
}

var awesomeRectangle = new Cube(2);
console.log(`
Length is ${awesomeRectangle.length}
Custom, rectangle area is ${awesomeRectangle.surfaceArea}
Custom, rectangle volume is ${awesomeRectangle.volume}
`);
console.log('-----after activating setters-----');
awesomeRectangle.volume = 9;
// awesomeRectangle.volume = 8;

console.log(`Length modifed by setter is ${awesomeRectangle.length}`);
