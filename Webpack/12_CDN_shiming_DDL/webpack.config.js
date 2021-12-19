const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ProvidePlugin } = require("webpack")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    // hash, contenthash, chunkHash
    filename: "js/build.js",
    path: path.resolve(__dirname, "./build"),
    clean: true,
    // 可以通过publicpath来配置对资源的cdn
    // publicPath: "https://codertang/cdn/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "CDN_shiming_DDL",
      template: "./index.html"
    }),
    // 使用webpack内置的provedePlugin插件, 实现shimming
    new ProvidePlugin({
      axios: "axios",
      dayjs: "dayjs"
    })
  ],
  // 对代码中使用的第三方模块做排除, 使用cdn引入
  // externals: {
  //   axios: "axios",
  //   dayjs: "dayjs"
  // }
}

module.exports = config