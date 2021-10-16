/**
 * 1. 直接通过class关键字的方式定义类
 * 2. 通过类的表达式的方式定义类
 */

class Person {
}

// 这种方式用的比较少, 一般使用类的关键字
// var Student = class {
// }

var p = new Person()

// 类也是有它的原型对象的
console.log(Person.prototype);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.constructor);
console.log(typeof Person); // 它是一个function, 这是需要知道的

// 同时通过类创建出来的对象它的隐式原型同样也等于类的显示原型, 大体上与构造函数一致
console.log(p.__proto__ === Person.prototype);