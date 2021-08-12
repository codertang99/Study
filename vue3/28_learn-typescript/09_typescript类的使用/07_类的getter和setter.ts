class Person {
  // 私有属性的编写规范 _开头
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  // 私有属性的getter和setter方法

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

}

const p = new Person("tang")

// 直接通过 . 的方式进行访问和修改
p.name = "kobe"
console.log(p.name)