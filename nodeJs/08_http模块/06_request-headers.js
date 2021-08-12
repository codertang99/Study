const http = require('http');

const server = new http.Server((req, res) => {
  console.log(req.headers);
  res.end("hello")
})

server.listen(3000, () => {
  console.log("服务器启动成功");
})

