const http = require('http');
const url = require("url")

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === "/login") {
    if (req.method === "POST") {
      // console.log(req.body); 这样是获取不到的
      // body是通过数据流的方式传递的，可通过on进行监听,二进制的方式
      req.setEncoding("utf-8")
      req.on("data", (data) => {
        console.log(data);
        const { username, password } = JSON.parse(data)
        console.log(username,password);
      })
      res.end("hello")
    }
  }

})

server.listen(3000, () => {
  console.log("服务器启动成功");
})