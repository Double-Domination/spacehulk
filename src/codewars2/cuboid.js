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
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
