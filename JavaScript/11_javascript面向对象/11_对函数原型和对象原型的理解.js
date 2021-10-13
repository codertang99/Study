/**
 * 
 * @param {*} name 
 * @param {*} age 
 * @param {*} height 
 * 每一个函数都有一个prototype的原型 -> 称作显示原型, 它指向一块对象空间, 里面有一个不可枚举的constructor的属性
 * 而new 出来的函数对象中有一个__proto__的属性 -> 称作隐式原型, 它同样也指向对象空间, 也就是说 prototype === __proto__
 * 它们是同一个对象, constructor 属性是指向本身函数对象 constructor === fn, 这是一个奇怪的原型指向关系, 要深度理解
 */
function Person(name, age, height) {

  this.name = name
  this.age = age
  this.height = height

}

// 在函数原型上添加对应函数, 不同对象访问同一函数, 节省空间, 不会重复创建函数, 相当于公共区域
Person.prototype.eating = function() {
  console.log(this.name + "eating");
}

Person.prototype.running = function() {
  console.log(this.name + "running");
}

console.log(Person.prototype);  // 打印虽然是一个空对象, 实际上有一个enumerable为false的constructor属性
console.log(Object.getOwnPropertyDescriptors(Person.prototype));  // 打印所有属性和描述符

// 当然也可以自己构造一个对象 -> 赋值在prototype上, 一般需要添加多个属性时操作
// 注意需要添加constructor, 同时enumerable需要不可枚举
// 推荐使用Object.defineProperty方式定义constructor
// Object.defineProperty()

var p1 = new Person("tang", 20, 1.99)
var p2 = new Person("lucy", 29, 1.77)

console.log(p1, p2);
// 它们两个的eating是同一个, 说明添加在同一区域, 也就是原型上
console.log(p1.eating === p2.eating);

p1.eating()
p2.eating()