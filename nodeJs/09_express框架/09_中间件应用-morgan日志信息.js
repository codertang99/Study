const fs = require("fs")

const express = require("express")
const morgan = require("morgan")

const writeStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+"
})

const app = express()

app.use(morgan("combined", { stream: writeStream }))

app.post("/test", (req, res, next) => {
  res.end("结束")
})

app.listen(3000, () => {
  console.log("打印日志信息服务器启动成功")
})