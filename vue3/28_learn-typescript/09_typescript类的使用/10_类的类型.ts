class Person {
  name: string = "tang"
  constructor(name: string) {
    this.name = name
  }

  running() {
    console.log(12321)
  }

}

// new出来的类型本身被推断为Person类型
const p = new Person("a")

const p1: Person = new Person("1")
const p2: Person = {
  name: "string",
  running() {
    console.log("!23123")
  }
}
