const express = require('express');

// express是一个函数,执行函数返回另一个函数
const app = express()

// 监听get请求login路径,执行中间件的回调函数
app.get("/login", (req,res,next) => {
  // req 请求对象
  // res 响应对象
  // next 执行下一个中间件函数的next方法

  console.log("第一个中间件函数");
  res.end("hello")

})

app.listen(3000, () => {
  console.log("express服务器启动成功");
})