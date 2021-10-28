// 这里打印所有promise原型上的对象方法几描述符
// 所有promise的对象方法, 都是方法其原型对象上的
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

class Person {
  constructor(executor) {

    const resolve = () => {}
    const reject = () => {}
    
    executor(resolve, reject)
  }
  // 这里是对象方法
  then() {}

  // 这里是类方法
  static all() {}

}

// 这是一个promise对象
const promise = new Promise((resolve, reject) => {
  resolve("hhhh")
})

// 如果同一个promise的then方法被多次调用那么所有的then都会被执行 -> 注意这里不是指链式调用, 链式调用本质上是返回一个新的promise对象
promise.then((res) => {
  console.log("res1: ",res);
})

promise.then((res) => {
  console.log("res2: ",res);
})

promise.then((res) => {
  console.log("res3: ",res);
})

// promise的then对象方法是可以有返回值的, 这里返回值大致可以分为三种情况
//  -> 返回一个普通值(字符串, 对象等), 它本质上会返回一个promise并且传入的普通值作为它resolve的参数
//  -> 返回一个promise对象, 它本质上是往promise的resolve方法中传入一个promise对象, 并且由自己的promise的resolve决定后面的执行
//  -> 返回一个对象, 并且这是对象实现的thenable接口(then方法), 它本质上是在promise的resolve方法中传入实现thenable的对象, 并由实现的then方法来确定后面执行
//  -> 不写返回值, 相当于返回一个undefined
promise.then((res) => {
  return "哈哈哈 -> 我是普通值"
  /**
   * 上面返回值等价于以下代码
   *   return new Promise((resolve, reject) => {
   *      resolve("哈哈哈 -> 我是普通值")
   *  })
   */
}).then(res => {
  console.log("我是返回的promise resolve对象", res);
})

promise.then(res => {
  return new Promise((resolve, reject) => {
    resolve("哈哈哈 -> 这里由我promise来决定")
  })
  /**
   * 上面返回值等价于以下代码
   *   return new Promise((resolve, reject) => {
   *      resolve(new  Promise((resolve) => {
   *        resolve("哈哈哈 -> 这里由我promise来决定")
   *      }))
   *  })
   */
}).then(res => {
  console.log("我是返回promise的promise resolve", res);
})

promise.then((res) => {
  return {
    then: function(resolve, reject) {
      resolve("哈哈哈 -> 这里由我实现的then方法决定")
    }
  }
  /**
   * 上面返回值等价于以下代码
   *   return new Promise((resolve, reject) => {
   *      resolve({
   *        then: function(resolve, reject) {
   *           resolve("哈哈哈 -> 这里由我实现的then方法决定")
   *          }
   *      })
   *  })
   */
}).then(res => {
  console.log("我是返回的实现thenable的对象 resolve", res);
})