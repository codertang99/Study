const http = require("http")

const server = http.createServer((req,res) => {
  res.end("hello server")
})

server.listen(8000, "0.0.0.0", () => {
  console.log("服务器启动成功");
})