// as 用于转换具体类型和不具体类型

const element = document.getElementById("div") as HTMLImageElement

element.src = ""  // 如果为HTMLElement则没有src得转换为HTMlImageElement

class Person {

}


class Student extends Person {
  sayHello() {

  }
}

function foo(f: Person) {
  (f as Student).sayHello() // 具体类型
}

const p1 = new Person()

foo(p1)

export {}