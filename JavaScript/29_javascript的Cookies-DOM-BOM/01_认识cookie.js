/**
 * cookie -> 俗称小甜饼, 是浏览器当中的一种机制
 * 通常我们不用去关注cookie的设置, 一般是在我们浏览器发送请求的时候服务器会返回cookie的值
 * 不用我们自己去获取保存cookie, 浏览器会自动获取、发送请求会自动携带
 * 一般用作此机制来存储某些数据, 在请求中用做校验
 * 但现在不建议使用, 因为采用明文方式来获取发送, 通常不安全, 而且每次请求都会携带cookie, 且传输数据量有限
 */

fetch("http://localhost:3000/test").then(res => {
  return res.text()
}).then(res => {
  // 此处获取服务器响应的数据, 同时携带cookie, 浏览器会做自动保存
  console.log(res);
  setTimeout(() => {
    // document.cookie = "lucy=''; max-age=0";
    document.cookie = "tang=''; max-age=0";
  }, 3000);
})

// 需要注意的是, 通过document.cookie的方式是获取不到cookie的
// console.log(document.cookie);

// 但是可以通过document的方式来设置cookie
// document.cookie = "lucy=200"

// 那么如何删除cookie呢
// 通过设置cookie的有效时间来设置
// 如果是服务器返回的cookie, 客户端需要设置过期时间来删除, 同时需要服务器那边配合, 设置一个httpOnly属性
