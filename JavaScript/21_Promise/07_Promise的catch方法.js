/**
 * Promise的catch方法
 *  -> 可以调用reject方法, 直接转为reject状态
 *  -> 直接throw new Error("错误信息") 也可以转为reject状态
 */

new Promise((resolve, reject) => {
  // reject("我是reject调用")  -> reject方式
  throw new Error("我是抛出的error")  // -> 直接抛出异常
  // 注意这里的then只是一个简写, 它优先于前一个promise的resolve, 其次是return默认返回的then调用
}).then((res) => {
  console.log("res", res);
}).catch((err) => {
  console.log("err", err);
  // catch中也是可以有返回值的, 直接return跟then中返回是一致的, 返回一个新的promise并调用resolve
  // return "hhhh"  直接return转为resolve的then状态
  // 如果要进入后面的catch 需要再次抛出异常
  throw new Error("hhhh")
}).then(res => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})


const promise = new Promise((resolve, reject) => {
  reject("hhh")
})

// 注意以下写法会报错 -> promise.then 和catch他们是两个互不影响的两个方法
// 推荐使用链式调用或直接在then方法中传入catch函数
// node 这样写法不会进行处理会报错
promise.then(res => {
  console.log(res);
})

promise.catch(err => {
  console.log(err);
})