// all方法有一个缺陷, 如果有一个为rejected, 则返回rejected的状态
// 如果我有一个需求, 需要等所有的都执行完得到结果呢?

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

// 这个方法执行得都是then得resolve回调, 注意它返回得是一个结果集
Promise.allSettled([promise1, promise2, promise3]).then(res => {
  // 如果status是fulfilled -> 则是value的值
  // 如果status是rejected -> 则是reason的值
  console.log(res);
})