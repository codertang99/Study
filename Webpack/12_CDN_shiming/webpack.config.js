const path = require("path")
const { ProvidePlugin } = require("webpack")

// 使用mini-css-extract-plugin, 对css文件进行抽取
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 对css代码进行压缩
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")


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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
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
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css"
    }),
    new CssMinimizerWebpackPlugin()
  ],
  // 对代码中使用的第三方模块做排除, 使用cdn引入
  // externals: {
  //   axios: "axios",
  //   dayjs: "dayjs"
  // }
}

module.exports = config