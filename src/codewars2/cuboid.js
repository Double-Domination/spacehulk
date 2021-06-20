class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.with = width;
    this.height = height;
  }

  get surfaceArea() {
    return this.length * this.height * this.with;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
