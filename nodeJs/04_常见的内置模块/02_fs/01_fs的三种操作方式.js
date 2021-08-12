const fs = require("fs")

const paths = "./info.txt"

// 获取文件信息参数

// 同步方式，会阻塞代码执行
const info1 = fs.statSync(paths)
console.log(info1)

// 异步方式，会出现回调地狱问题
const info2 = fs.stat(paths,(err, res) => {
  if(err) {
    return console.log("错误")
  }

  console.log(res)
})

// 支持promise的方式调用
const info3 = fs.promises.stat(paths)
info3.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
