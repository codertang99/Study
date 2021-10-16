/**
 * 通过class关键字定义类
 * 通过new方式定义类的对象, 会调用类的默认的构造方法
 * 可以通过重写constructor方法, 传递参数
 * 可以在class里面定义成员函数 -> 在constructor函数的外面
 * 
 */

var arr = ["tang", "lucy", "hello", "bibili"]

class Person {

  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
    this._address = "北京市"
  }

  // 注意定义成员函数是直接定义在该类的原型上面的
  eating() {
    console.log(this.name + " eating~");
  }

  // 访问器和设置器
  get address() {
    return this._address
  }

  set address(value) {
    this._address = value
  }

  // 通过static关键字方式定义的函数, 可以直接通过类名调用, 一般用于工具函数
  static createRandomPerson() {
    var name = arr[Math.floor(Math.random() * arr.length)]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age, "1.99")
  }

}

var p = new Person("tang", 29, 1.99)
console.log(p);
// 打印p原型对象上面所有对象 + 描述符
// console.log(Object.getOwnPropertyDescriptors(p.__proto__));

// for(var i=0; i<100; i++) {
//   console.log(Person.createRandomPerson());
// }

p.address = "赣州市"
console.log(p.address);

// 不过需要注意的是, 在JavaScript中没有真正意义上的封装, 还是可以通过访问私有属性的方式修改名义上的私有变量
p._address = "广州市"
console.log(p.address);