const express = require('express');

const userRouter = require("./router/user")

const app = express()

app.use("/user", userRouter)

app.listen(3000, () => {
  console.log("路由服务器启动成功");
})