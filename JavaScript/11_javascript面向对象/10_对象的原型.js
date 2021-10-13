// 对象里面都存在一个[[prototype]]属性, 称作原型
var obj = {
  name: "tang",
  age: 10
}

console.log(obj);
// 浏览器提供了一个访问对象原型的方式__proto__, 但建议仅供测试使用
console.log(obj.__proto__);

// ES5之后提供了另一种访问方式
console.log(Object.getPrototypeOf(obj));