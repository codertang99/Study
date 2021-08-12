const express = require("express")

const app = express()

const USER_NOT_LOGIN = "user_not_login"
const REGISTRY_FAIL = "registry_fail"

app.post("/login", (req, res, next) => {
  let isLogin = true
  if(!isLogin) {
    res.end("login success")
  } else {

    // 这样处理大部分逻辑都相同、所以我们放到统一地方进行处理

    // res.status(400)
    // res.json("user does not success")

    // 直接调用next传入参数进入错误处理的中间件进行统一的处理
    next(new Error(USER_NOT_LOGIN))
  }
})

app.post("/registry", (req, res, next) => {
  let isRegister = false
  if(isLogin) {
    res.end("registry success")
  } else {
    // res.status(400)
    // res.json("registry fail")

    next(new Error(REGISTRY_FAIL))
  }
})

app.use((err, req, res, next) => {

  let statusCode = 400
  let message = ""

  switch(err.message) {
    case USER_NOT_LOGIN:
      message = "user not login"
      break;
    case REGISTRY_FAIL:
      message = "registry fail"
      break;
    default:
      message = "not found"
  }

  res.json({
    failCode: statusCode,
    failMessage: message
  })
  
})

app.listen(3000, () => {
  console.log("错误处理服务器启动成功")
})