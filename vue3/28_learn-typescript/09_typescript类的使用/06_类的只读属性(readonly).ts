// 1. readyonly 只能被其直接访问, 而不可以修改, 可以通过constructor构造器复制
// 2. 在属性中又有person属性可以通过通过.方式进行修改可以修改的属性
class Person {
  readonly name: string = "tanng"
  readonly friend?: Person
  age: number = 10

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }

  say() {
    console.log(this.name + "say")
  }

}

const p = new Person("kobe", new Person("ac"))

if(p.friend) {
  p.friend.age = 10
}

console.log(p.name)
console.log(p.friend)

export {}