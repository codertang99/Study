/**
 * Promise.all -> 如果有多个promise需要同时返回结果可以直接调用all类方法
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1")
  }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2")
  }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3")
  }, 3000);
})

/**
 * 这里的all方法
 *    -> 所有的状态由前面的promise共同决定, 如果都为fulfilled则返回所有的fulfilled状态值
 *    -> 如果有一个为reject, 则转为rejected状态, 并返回第一个rejected的值
 */
Promise.all([promise1, promise2, promise3]).then((res) => {
  console.log(res);
})