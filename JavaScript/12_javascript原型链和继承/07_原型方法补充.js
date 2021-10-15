/**
  1. hasOwnPrototype 判断对象上面是否有属于自己的属性
  2. in / for in 方式, 判断对象上是否包含该属性 -> 包括原型链上面
  3. instanceof
  4. isPrototypeOf
 */

function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

var p = new Person("tang", 23, 1.99)

console.log(p);

console.log("name" in p); // 包括原型
console.log(p.hasOwnProperty("name")); // 只判断自己对象上面的属性 

// 下面for in 方式遍历对象, 会遍历对象上所有的属性和对象原型上所有的属性
for(var o in p) {
  console.log(o);
}

// 用于判断函数对象原型是否出现在对象原型上面 -> 不可判断对象
console.log(p instanceof Person);

// 用于判断对象是否存在于对象原型上的 -> 可以用于对象
console.log(Person.prototype.isPrototypeOf(p));