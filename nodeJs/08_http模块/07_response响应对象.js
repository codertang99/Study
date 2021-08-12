const http = require("http")

const server = new http.Server((req, res) => {
  res.write("hello");
  res.end("结束")
})


server.listen(3000, () => {
  console.log("服务器启动成功")
})
