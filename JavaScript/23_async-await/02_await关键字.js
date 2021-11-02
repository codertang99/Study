// await 是一个特殊的关键字, 它只能在async函数中使用, 后面跟上代码块
async function foo() {
  // 如果跟上一个普通值, 则会立即返回执行, 跟前面promise的规则一致
  // 如果跟上一个promise, 则会看promise的resolve值
  // 如果跟上一个对象, 对象实现了thenable值, 由then函数的resolve决定
  const result = await "123"
  // 在await后面的代码可以看作前面promise的then方法执行的内容, 它是异步的, 这个需要知道
  console.log("hhh");

  // 如果这个await的值是返回的reject, 会当作整个函数返回的reject
}