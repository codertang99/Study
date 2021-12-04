const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "development",
  // 设置source-map, 生成对应映射文件, 方便错误查找
  // 这里有很多种值可以设置, 对应查找具体文档
  devtool: "source-map",
  entry: "./src/cjs_module.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/build.js",
    clean: true
    // assetModuleFilename: "img/[name]-[hash:4][ext]"
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "other resource"
    })
  ]
}

module.exports = config