const http = require("http")
const url = require("url")
const qs = require("querystring")

const server = new http.Server((req, res) => {
  console.log(req.url)
  // res.end("server")

  // 普通方式处理
  // if(url === "/login") {
  //   res.end("login欢迎回来")
  // } else if(url === "/register") {
  //   res.end("register")
  // } else {
  //   res.end("server")
  // }

  // 带参方式处理
  const urls = url.parse(req.url) //通过url模块的parse方法分割url和参数信息
  console.log(urls.pathname)  // 解析后保存路径的信息
  console.log(urls.query) // 保存get参数的信息
  const qsObj = qs.parse(urls.query)  // 可以通过qs模块的parse方法解析具体参数
  console.log(qsObj)
  res.end("server")

})


server.listen(3000, () => {
  console.log("服务器启动成功")
})