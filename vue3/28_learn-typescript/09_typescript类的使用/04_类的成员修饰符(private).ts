// 私有: 只能被类内部所访问
class Person {
  private name: string = ""

  setName(newName: string) {
    this.name = newName
  }

  getName() {
    return this.name
  }

}

const p = new Person()

p.setName("tang")
console.log(p.getName())

export {}