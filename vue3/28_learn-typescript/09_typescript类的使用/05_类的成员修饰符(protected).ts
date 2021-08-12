// protected 受保护的, 可以被类内部访问和被继承的子类访问
class Person {
  protected name: string = ""

  say() {
    console.log(this.name)
  }

}

class Student extends Person {
  getName() {
    console.log(this.name)
  }

  setName(newName: string) {
    this.name = newName
  }
}

const stu = new Student()

stu.setName("tang")

stu.getName()

export {}