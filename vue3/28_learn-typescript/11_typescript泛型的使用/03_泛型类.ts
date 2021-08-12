class Person<T, E> {
  private name: T
  private age: E

  constructor(name: T, age: E) {
    this.name = name
    this.age = age
  }

}

const info = new Person("name", 10)
const info2 = new Person<string, number>("tang", 100)
const info3: Person<string, number> = new Person("tang", 20)