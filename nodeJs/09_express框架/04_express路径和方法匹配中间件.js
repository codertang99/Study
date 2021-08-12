const express = require('express');

const app = express()

app.use((req,res,next) => {
  console.log("middleware");
  next()
})

app.get("/login", (req,res,next) => {
  console.log("path and method middleware1");
  res.end("结束")
  next()
})

app.post("/produtcs", (req,res,next) => {
  console.log("path and method middleware");
})

app.listen(3000, () => {
  console.log("服务器启动成功");
})