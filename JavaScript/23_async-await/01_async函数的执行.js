/**
 * 加上async关键字的函数称作异步函数, 虽然它叫异步函数但与普通函数的执行过程没有区别
 */
async function foo() {
  console.log("开始~~~");

  console.log("中间代码");
  
  console.log("结束~~~");

  // 如果没有返回值默认会返回undefined -> 这里的返回值和之前promise的resolve规则一样
  // 1 -> 如果返回的是一个普通的值, 则会作为promise.then的resolve的参数
  // 2 -> 如果返回的是一个对象, 并且对象实现thenable的接口, resolve的值和对象中的resolve函数有关
  // 3 -> 如果返回的本身是一个promise, 则then中resolve由promise的resolve决定
  return new Promise((resolve, reject) => { reject("123") })

  // 其次, 如果在async函数中抛出异常并不会中断执行, 会在对应返回promise的catch中捕获
  // 返回promise的reject也是, 在返回的promise的catch中

}

// async函数执行是立即同步执行的
// foo()


// async异步函数返回值的区别, 只要是async的异步函数都会返回一个promise
// 这是一个promise
const promise = foo()

promise.then(res => {
  console.log("res:", res);
}).catch(err => {
  console.log("err:", err);
})