var obj = {
  name: "tang",
  age: 20
}

/**
 * 新创建出来的对象的原型始终指向上面的对象
 * 可以通过之间创建的方式指向, 也可以封装成函数
 */
// var newObj = {}
// Object.setPrototypeOf(newObj, obj)
// console.log(newObj);
// console.log(newObj.__proto__);

/**
 * 
 * @param {*} o 传入的对象参数始终作为创建函数的原型对象
 * return 返回一个新的对象, 它的原型指向传入对象参数o
 */
function createObject(o) {
  // var newObj = {}
  // Object.setPrototypeOf(newObj, o)  // 这是Object的一个设置原型的方法
  // newObj.__proto__ = o // 这种方法最好只用于测试
  // 通过构造函数的prototype属性
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

console.log("-----------");

// 以上Object给我们提供了一个更加简便的方法
var obj1 = Object.create(obj)
console.log(obj1);
console.log(obj1.__proto__);