const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.com.config")

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",  //生成关系映射,方便快速查找定位错误
  devServer: {
    contentBase: "../public",
    hot: true,
    open: true,
    // host: "0.0.0.0",
    port: "7777",
    compress: true,
    proxy: {
      "/api": {
        target: "http://123.207.32.32:9001",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,  // HTTPS证书无效情况下
        changeOrigin: true
      }
    }
  },
})