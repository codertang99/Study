class Person {
  // 类中定义的属性必须给定初始化值
  name: string = ""
  age: number = 0

  runing() {
    console.log(`${this.name}在跑步`)
  }

}

const p = new Person()

p.name = "tang"
p.age = 19

p.runing()