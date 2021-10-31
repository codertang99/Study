/**
 * 生成器是什么?   -> 是一种可以控制函数执行的一种方案 -> 执行、暂停、结束
 *    它通常跟一个生成器函数配合返回一个生成器, 通过yield来控制
 */
function *foo() {
  console.log("开始执行~");
  yield

  const value1 = 100
  console.log(value1);

  yield

  const value2 = 200
  console.log(value2);

  yield

  console.log("结束执行~");

}

// 这里执行函数并不会正常执行 -> 它会返回一个生成器
// 生成器是一个特殊的iterator
const generator = foo()

// 遇到yield就暂定, 每next一次执行一次
generator.next()
generator.next()
generator.next()
generator.next()