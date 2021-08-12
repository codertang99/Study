class Person {
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(this.name + " 在跑步")
  }
}

class Student extends Person {
  sid: number = 0

  constructor(name: string, age: number, sid: number) {
    super(name, age)
    this.sid = sid
  }

  studing() {
    console.log(this.name + " 在学习")
  }
}

class Teachear extends Person {
  title: string = ""

  constructor(name: string, age: number, title: string) {
    super(name, age)
    this.title = title
  }

  teaching() {
    super.sayHello()
    console.log(this.name + " 在教书")
  }
}

const t = new Teachear("lulu", 29, "辅导员")

t.teaching()

const s = new Student("tang", 19, 1)

s.studing()

export {}