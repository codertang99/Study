const express = require("express")
const multer = require("multer")

const app = express()

const upload = multer()
app.use(upload.any())

app.post("/upload", (req, res, next) => {

  console.log(req.body)

  res.end("结束")
})

app.listen(3000, () => {
  console.log("multer解析服务器启动成功")
})