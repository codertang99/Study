const http = require('http');

const server = new http.Server((req,res) => {
  // req对象中保存着客户端向服务器请求的参数信息
  console.log(req.method) // 请求的方式
  console.log(req.headers)  // 请求头的信息，有时候请求的token信息会放在请求头中
  console.log(req.url)  // 请求的url地址，经常针对不同url地址做不同处理
  res.end("hello server")
})

server.listen(3000, () => {
  console.log("服务器启动成功")
})