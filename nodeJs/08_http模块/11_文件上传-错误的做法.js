const http = require('http');
const fs = require('fs');

const server = new http.Server((req, res) => {
  if(req.url === "/upload") {
    if(req.method === "POST") {

      const write = fs.createWriteStream("./foo.png")
      req.pipe(write)
      // 这种方式是错误的，因为在上传文件的时候还附带着一些其它的信息(文件的描述信息、boundry、等)
      req.on("data", (data) => {
        // console.log(data.toString());
        // write.write(data)
      })


      req.on("end", () => {
        console.log("文件打印结束"); 
        res.end("结束")
      })

    }
  }
})

server.listen(3000, () => {
  console.log("文件上传服务器启动成功");
})