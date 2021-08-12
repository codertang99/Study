function makeArea(shape: Shape) {
  return shape.getArea()
}

// 抽象类不能被new, 抽象方法必须被子类实现

abstract class Shape {
  abstract name: string
  abstract getArea();
}

class Circle extends Shape {
  private _r: number

  constructor(_r: number) {
    super()
    this._r = _r
  }

  getArea() {
    return this._r * this._r * 3.14
  }

}

class Reactangle extends Shape {
  private _width: number
  private _height: number

  constructor(width: number, height: number) {
    super()
    this._height = height
    this._width = width
  }

  getArea() {
    return this._width * this._height
  }
}

console.log(makeArea(new Reactangle(10, 20)))