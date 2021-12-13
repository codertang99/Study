const path = require("path")
const { merge } = require("webpack-merge")
const RecatRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 8888,
    static: {
      // publicPath, 默认为 / 
      publicPath: "/abc",
      // 指定外部资源的绝对路径
      directory: path.resolve(__dirname, "../assets"),
      // 开启对资源文件的监听
      watch: true
    },
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        pathRewrite: {
          "^/api": "/"
        },
        secure: true,
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  plugins: [
    new RecatRefreshWebpackPlugin(),
  ]
})