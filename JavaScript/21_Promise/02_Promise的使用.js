// Promise的出现当前于定义了一种统一的规范, 利用回调的方式
function getData() {
  // 返回一个promise对象
  return new Promise()
}

// 获取promise
const promise = getData()

promise.then((res) => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


/**
 * Promise是一个构造函数, 下面类似于它的实现, 通过传入一个函数
 * @param {*} fn 传入的executor
 */
// class Promiz {
//   constructor(fn) {
//     this.resolve = function() {}
//     this.reject = function() {}
//     this.fn = fn
//     // 传入对应函数它会立即执行, 同时传入对应两个函数参数
//     fn(this.resolve, this.reject)
//   }
// }

// new Promiz((resolve, reject) => {

// })
