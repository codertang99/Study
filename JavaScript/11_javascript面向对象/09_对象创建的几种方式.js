/**
 * 1. 字面量方式
 * 2. 工厂函数方式 -> 会有一些缺陷, 没有明确的表现出对象的类型
 * 3. 构造函数方式 -> 
 *    new Fn()的方式调用, 隐式的创建对象绑定this, prototype绑定, 执行函数体, return this
 *    但是构造函数也可以有返回值, new 调用还是return this
 *    直接调用, 如果返回值是引用类型还是return this, 如果返回值是普通类型则返回普通类型(这是一个tips)
 */

// 字面量方式创建对象, 不便于多个对象创建
var p1 = {
  name: "tang",
  age: 20,
  height: 1.99,
  eating: function() {
    console.log(this.name + "eating");
  }
}

p1.eating()
console.log(p1);

// 工厂函数方式创建对象, 几乎和构造函数方式没区别, 但是有些小弊端
function person(name, age, height) {

  var obj = {}

  obj.name = name
  obj.age = age
  obj.height = height
  obj.eating = function() {
    console.log(this.name + "eating");
  }

  return obj
}

var p2 = person("tang", 29, 1.99)
p2.eating()
console.log(p2);


// 构造函数new方式创建对象, 有明确的类型显示
function Person(name, age, height) {

  this.name = name
  this.age = age
  this.height = height
  this.eating = function() {
    console.log(this.name + "eating")
  }

}

var p3 = new Person("tang", 299, 2.99)

p3.eating()
console.log(p3);