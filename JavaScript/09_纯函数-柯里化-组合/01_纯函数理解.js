/***
 * 1. 有固定的输入, 固定的输出, 不受函数外部影响
 * 2. 函数副作用, 不能修改外部变量, 不影响外部环境
 */

// 这是一个纯函数, 固定的输入固定的输出
function foo(num1, num2) {
  return num1 + num2
}

var age = 100
// 这不是一个纯函数, 受外部变量影响返回不固定的输出
function bar(num) {
  return age + num
}

console.log(bar(100));
age = 19
console.log(bar(20));

// 这不是一个纯函数, 有函数副作用, 修改传入参数对象属性
function baz(obj) {
  obj.age = 100
  return obj
}

baz({name: "tang", age: 10})