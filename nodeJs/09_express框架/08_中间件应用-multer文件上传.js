const path = require("path")

const express = require("express")
const multer = require("multer")

const app = express()

// 这种方式没有文件后缀名，而且名字也是随机生成的
// const upload = multer({
//   dest: "./upload/"
// })

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname))
  },
  destination: (req, file, callback) => {
    callback(null, "./upload/")
  }
})

const upload = multer({
  storage
})

app.post("/upload", upload.single("file"), (req,res,next) => {
  console.log(req.body)
  console.log(req.file)
  res.end("上传成功")
})

app.listen(3000, () => {  
  console.log("文件上传服务器启动成功")
})