const express = require('express');

const app = express()

app.get("/login",(req,res,next) => {
  console.log("middleware1");
  next()
},(req,res,next) => {
  console.log("middleware2");
  next()
},(req,res,next) => {
  console.log("middleware3");
  next()
},(req,res,next) => {
  console.log("middleware4");
  res.end("结束")
})

app.listen(3000, () => {
  console.log("服务器启动成功");
})