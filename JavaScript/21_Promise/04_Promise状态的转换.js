/**
 *  Promise总共对应有三种状态 -> 注意状态一经转换不可改变
 *    -> pending 默认待定的初始状态, 即executor执行函数中状态
 *    -> fulfilled或resolved 操作成功已兑现状态 在调用resolve后转换
 *    -> rejected 操作失败已拒绝状态 在调用reject后转换
 */

new Promise(function(resolve, reject) {
  // 此处是executor函数, 在此函数中为pending状态
  console.log("pending状态中~~~~~~~~~");
  resolve("成功") // 此处调用resolve函数, 执行成功的回调函数, 状态开始转换为fulfilled、resolved, 即成功状态
  // 上面已经调用了resolve、后面再调用其它无效, 状态一经改变不可逆转
  // reject("失败") // 如果调用reject函数, 执行失败的回调函数, 状态开始转换为rejected, 即拒绝状态
}).then((res) => {
  // 这里已处于成功状态, 执行回调
  console.log("resolve", res);
}, (err) => {
  // 这里处于失败状态, 执行回调
  console.log("reject", err);
})
