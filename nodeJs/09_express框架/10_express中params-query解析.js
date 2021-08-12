const express = require("express")

const app = express()

// 可能会有根据商品id查询详情、根据params获取
app.get("/product/:id", (req,res,next) => {
  console.log(req.params) // 返回一个对象,因为可能会有多个
  res.end("结束 ")
})

// get请求获取url地址参数信息
app.get("/login", (req, res, next) => {
  console.log(req.query)
  res.end("登录成功 ")
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})