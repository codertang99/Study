const http = require("http")

const server = http.createServer((req, res) => {
  // res.setHeader("content-type","text/html;charset=utf-8")

  res.writeHead(200, {
    "content-type": "text/html;charset=utf-8"
  })

  res.end("<h2>标题</h2>")
})

server.listen(3000, () => {
  console.log("服务器启动成功");
})