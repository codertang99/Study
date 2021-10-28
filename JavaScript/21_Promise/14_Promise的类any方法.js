const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise1")
  }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2")
  }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise3")
  }, 3000);
})

// 会等待执行所有的promise, 如果正常fulfilled, 会看谁先执行resolve, 就执行对应回调
// 如果有reject, 则会等待看其它是否有resolve的情况, 如果有则执行
// 如果都为rejected, 则进入catch的rejected错误集合
// err AggregateError: All promises were rejected
Promise.any([promise1, promise2, promise3]).then(res => {
  console.log("res", res);
}).catch((err) => {
  console.log("err", err);
})