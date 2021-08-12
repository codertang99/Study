const http = require('http');

const server = new http.Server((req, res) => {
  res.end("hello server")
})

server.listen(3000, "0.0.0.0", () => {
  console.log("服务器启动成功!!!");
  // console.log(server.address().port);  如果不指定端口，则系统自动分配端口，可通过server.address().port方式获取
  // 指定主机地址,localhost映射127.0.0.1，而0.0.0.0回环地址则会自动映射localhost、127.0.0.1,系统默认0.0.0.0
})