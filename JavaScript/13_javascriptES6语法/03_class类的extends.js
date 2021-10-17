class Person {

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 方法是在Person的原型对象上面的
  eating() {
    console.log(this.name + " eating~");
  }

  running() {
    console.log("runrunrun");
    console.log("runrunrun");
  }

  // 静态方法
  static staticMethod() {
    console.log("Person static staticMethod");
  }

}

// 继承的本质上就是创建了一个新的对象, 新的对象的原型是父类对象的原型, 然后让new出来的对象原型指向新对象上
// 参考原型链继承, 其实class类的定义和继承就是原型链继承的一种简写而已, 这个需要理解
// 这里继承了父类的, 必须要在构造函数调用super方法
class Student extends Person {
  constructor(name, age, sno) {
    // 调用父类的构造方法, 便于复用, 是添加在当前调用者上面的
    // 需要注意的是, 需要在this之前或返回this对象后
    super(name, age)
    this.sno = sno
  }

  // 这里可以重写父类的running方法, 相当于在自身原型上添加了running方法, 在访问的时候优先访问自身原型上
  running() {
    // 为了便于复用, 使用super关键字调用父类的running方法
    super.running()
    console.log("student runrunrun");
  }

  // 重写继承父类的static静态方法
  static staticMethod() {

    // 同理, 调用super关键字访问父类static方法, 便于复用
    super.staticMethod()
    console.log("Student static method");

  }

}

var s = new Student("tang", 20, 001)
console.log(s);

// 继承了父类, 可以访问在原型上的所有方法
s.eating()
s.running()


console.log("---------");
Student.staticMethod()


// 需要注意的是static静态方法是添加的类上面的, 不是添加在类原型上面, 与成员方法不同
console.log(Object.getOwnPropertyDescriptors(Student));