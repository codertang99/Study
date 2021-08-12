const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === "/upload") {
    if(req.method === "POST") {

      req.setEncoding("binary")
      const header = req.headers["content-type"].split(" boundary=")[1]

      let body = ""

      req.on("data", (data) => {
        body += data
      })

      req.on("end", () => {
        // console.log(body);
        const content = qs.parse(body, "\r\n", ": ")["Content-Type"]
        let inner = body.split(content)[1]
        inner = inner.substring(0, inner.indexOf(`--${header}--`))
        inner = inner.replace(/^\s\s*/, '')
        fs.writeFile("./foo.png", inner,"binary" ,(err) => {
          console.log(err);
        })
        res.end("结束")
      })

    }
  }
})

server.listen(3000, () => {
  console.log();
})