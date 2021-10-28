/**
 * Promise.reject  -> 转换为Promise并reject
 */

const err = "err message"

// 这是一种方法转为Promise
// new Promise((resolve, reject) => {
//   reject(err)
// }).catch(err => {
//   console.log(err);
// })


// 可以直接调用Promise的类reject方法, 相当于上面的简写
// 需要注意的是, 在进行reject的时候, 无论传入的是什么参数都是当作参数进行rejected状态, 这一点与resolve不同
Promise.reject(err).catch(err => {
  console.log(err);
})