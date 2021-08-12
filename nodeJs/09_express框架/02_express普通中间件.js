const express = require('express');

const app = express()

app.use((req,res,next) => {
  console.log("中间件1");
  next()
})

app.use((req,res,next) => {
  console.log("中间件2");
  next()
})

app.use((req,res,next) => {
  console.log("中间件3");
  res.end("结束")
})

app.listen(3000, () => {
  console.log("服务器启动成功");
})