const http = require("http")

const server = http.createServer((req, res) => {

  // 响应状态码，服务器向客户端返回状态信息表示请求的状态

  // res.statusCode = 400
  res.writeHead(401)
  
  res.end("hello server")
})

server.listen(3000, () => {
  console.log("服务器在3000端口启动成功呢")
})