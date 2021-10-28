/**
 * Promise.resolve() -> 一般我们拿到一个数据希望把它直接转为promise的resolve可以直接调用resolve方法
 *      这种相当于 new Promise((resolve, reject) => {
 *         resolve("数据")
 *      })
 */

const data = {name: "tang", age: 20}

// 把data转为promise方式, 直接new promise太繁琐了
// new Promise((resolve, reject) => {
//   resolve(data)
// }).then(res => {
//   console.log(res);
// })

// 直接调用Promise的类方法 resolve进行转换
Promise.resolve(data).then(res => {
  console.log(res);
})