const express = require('express');

const app = express()

// 通过自己手动解析json body中的数据
// app.use((req,res,next) => {
//   if(req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       req.body = JSON.parse(data.toString())
//     })
//     req.on("end", () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 当然express已经有了一些内置的中间件可以自动解析
app.use(express.json()) // 解析json中的数据
app.use(express.urlencoded({extended: true})) // 解析urlencodede中的参数信息
// extended值 true和false的区别
// true : 表示采用第三放的qs库进行解析处理urlencoded
// false : 表示采用内置的querystring库解析处理urlencoded

app.post("/login", (req,res,next) => {
  console.log(req.body);
  res.end("结束")
})

app.listen(3000, () => {
  console.log("服务器启动成功");
})