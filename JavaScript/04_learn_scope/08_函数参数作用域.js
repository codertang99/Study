var x = 1

// 注意这里的参数作用域, 在参数有默认值的时候, 会产生另外的作用域
function foo(x, y = function() { x = 10; console.log(x); }) {
  console.log(x);
  var x = 4
  y()
  console.log(x);
}

foo()

console.log(x);