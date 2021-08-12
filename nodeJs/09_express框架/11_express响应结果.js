const express = require('express');

const app = express()

app.post("/login", (req, res, next) => {

  // 通过res.end返回json数据是比较麻烦的
  // res.type("application/json")
  // res.end(JSON.stringify({username: "tang", password: 123}))

  // express中提供了.json的返回方式直接对json进行解析,而不用自己手动设置json格式

  res.status(400) //设置响应码

  // res.json({username:"codertang",password:123})  //返回json格式
  res.json(["123","123","43534"])  //返回数组格式

  

})

app.listen(3000, () => {
  console.log("服务器启动成功");
})