const express = require("express")
const webpack = require("webpack")
// 利用webpack-dev-middleware, 对webpack-dev做特殊需求服务, 使用express服务
// 通过webpack编译后, 放入devmiddleware中当作express中间件
const webapckDevMeddileware = require("webpack-dev-middleware")

const config = require("./webpack.config")

const app = express()

const compiler = webpack(config)

const devMiddleware = webapckDevMeddileware(compiler)

app.use(devMiddleware)

app.listen(3000, () => {
  console.log("服务器启动成功");
})