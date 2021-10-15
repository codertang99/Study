function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(junior, senior) {
  //Student.prototype = Object.create(Person.prototype) // 创建一个新的对象, 利用Object.create方法继承原型上面的所有方法

  junior.prototype = createObject(senior.prototype)

  // 完整的写法, 往原型上面添加对象, 描述符配置方法, 最后还会封装成一个完整的函数
  Object.defineProperty(junior.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: junior
  })

}

function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

Person.prototype.running = function() {
  console.log("在跑步");
}

Person.prototype.seeing = function() {
  console.log("在看");
}

function Student(name, age, height, sno, score) {
  Person.apply(this, [name, age, height])
  this.sno = sno
  this.score = score
}

/**
 * 当然以下的最终方法都不便于复用, 所以需要封装成一个函数
 * 使得需要继承的类的原型通过调用封装的函数就可以真正实现继承
 */

// 这样做是错误的, 这样做所有操作原型的都会在跟Person的prototype上的, 会覆盖Person.prototype上面的方法
// Student.prototype = Person.prototype

// Student.prototype = Object.create(Person.prototype) // 创建一个新的对象, 利用Object.create方法继承原型上面的所有方法
// // 往Student原型上添加constructor属性, 让创建出来的对象为Student, 注意这种只是简单的方法
// // Student.prototype.constructor = Student

// // 完整的写法, 往原型上面添加对象, 描述符配置方法, 最后还会封装成一个完整的函数
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: Student
// })

inheritPrototype(Student, Person)

Student.prototype.studing = function() {
  console.log("在学习");
}


var s1 = new Student("tang", 19, 1.11, 001, 99)

// 以下所有自带方法和继承方法都调用成功
console.log(s1);
s1.studing()
s1.running()
s1.seeing()