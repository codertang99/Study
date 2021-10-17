/**
 * 1. let、const是没有作用域提升的, 不可以重复定义
 * 2. let、const定义的变量不会添加到window对象中而在另一个新对象中
 * 3. let、const定义的变量拥有块级作用域
 */

let foo = "foo"
const bar = "bar"  // const定义常量, 不可重新赋值, 对引用类型可以改变引用对象里面的某一个值

// 这是代码块, es6语法中的支持代码块 -> let const function class -> 函数需要注意的是某些浏览器需要支持es5function是在代码块中式没有作用域的
// 
{
  var a = "za"
  let b ="b"
  function cc() {
    console.log("111");
  }
}

// console.log(b);
console.log(cc);  // 在代码块中声明的function在外面是可以直接访问的, 这是因为浏览器的原因