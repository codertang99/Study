function bar() {
  /**
   * 这里所产生抛出的异常如果不进行处理, 程序会继续往外抛出给调用栈, 一直抛向顶层调用, 顶层还未进行处理则终止执行
   */
  const err = new Error("error")
  console.log(err.message); 
  console.log(err.name);
  console.log(err.stack);
  throw err
}

function foo() {
  // 可以对可能产生的异常进行try catch的捕获, 这样捕获的异常会在catch代码块, 不会导致程序中断
  // try 放可能出现错误的代码, 如果产生错误则转到catch代码块, 如果没有则继续执行
  try {
    bar()
  } catch(err) {
    console.log(err);
  } finally {
    // finally 代码块, 无论是否存在异常都会执行
    console.log("程序最后!!!");
  }
}

foo()

console.log("hhhh");