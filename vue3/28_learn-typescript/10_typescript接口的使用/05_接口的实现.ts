interface IA {
  action: () => void
}

interface IInfo {
  name: string,
  age: number
}

class Person implements IA, IInfo {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  action() {

  }

}