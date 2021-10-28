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

// race 竞赛 -> 谁的promise的先被执行则执行先执行的回调
Promise.race([promise3, promise2, promise1]).then(res => {
  console.log("resovle",res);
}).catch((er) => {
  console.log("reject", er);
})