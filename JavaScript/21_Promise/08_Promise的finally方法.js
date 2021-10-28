new Promise((resolve, reject) => {
  resolve("hhh")
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  // 这里无论是fulfilled状态还是rejected状态都会执行finally的回调
  // 一般在这里做一些promise的清除关闭操作
  console.log(final,"我是最后的");
})