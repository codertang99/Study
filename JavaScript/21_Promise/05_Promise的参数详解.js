/**
 * Promise在resolve、reject是可以传入参数的
 *   -> 默认情况下传入普通值, 即resolve就执行resolve回调, 反之rejecet
 *   -> 如果传入的是一个promise对象, 那么执行的状态参数则由传入的promise的executor来决定
 *   -> 如果传入的是一个对象, 并且这个对象实现了对应then接口的方法, 那么对根据then方法的结果来决定
 */

new Promise((resolve, reject) => {
  // 这里传入普通参数值, 对应执行对应的回调
  resolve("success!!!") 
}).then((res) => {
  console.log("成功", res);
}, (err) => {
  console.log("失败", err);
})

new Promise((resolve, reject) => {
  // 这里传入的是新的promise对象, 调用resolve回调
  // 如果执行得是reject传入promise对象, 则都是reject
  resolve(new Promise((resolve, reject) => {
    // 由promise里面的回调结果来决定最终then值得转换 resolve即成功回调 reject即失败回调, 如果不执行则没有结果
    // resolve("哈哈哈哈")
    // reject("1")
  }))
}).then(res => {
  console.log("成功", res);
}, err => {
  console.log("失败", err);
})

new Promise((resolve, reject) => {
  // 这里执行resolve, 并传入实现then方法得对象
  // 如果是reject, 则直接进入reject回调
  resolve({
    then: function(resolve, reject) {
      // 方法里面执行resolve即成功, reject即失败, 不执行则无返回
      // reject("零零零零")
      // resolve(1)
    }
  })
}).then(res => {
  console.log("成功", res);
}, err => {
  console.log("失败", err);
})