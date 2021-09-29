function foo() {
  var name = "tang"

  function bar() {
    console.log(name);
  }

  return bar
}

var ccc = foo()

ccc()

/***
 *  script在执行之前会产生全局执行的上下文, 做一个前置预扫描
 *  全局执行上下文:
 *    GO -> 
 *      foo: foo function
 *      ccc: bar function  // 产生闭包
 *   函数执行上下文:
 *    AO -> 
 *      name: "tang"
 *      bar: bar function
 *   函数执行上下文:
 *    AO ->
 * 
 */