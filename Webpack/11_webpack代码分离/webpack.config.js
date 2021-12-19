const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack".Configuration)}
 */
const config = {
  mode: "development",
  // entry: "./src/index.js",
  // 采用多入口的方式, 这种需要考虑重复引用同一模块, 这样显得过于麻烦
  // entry: {
  //   index: { import: "./src/index.js", dependOn: "lodash" },
  //   with: { import: "./src/with.js", dependOn: "lodash" },
  //   lodash: ["lodash"]
  // },
  entry: {
    index: "./src/index.js",
    with: "./src/with.js"
  },
  output: {
    filename: "js/[name]-build.js",
    path: path.resolve(__dirname, "./build"),
    clean: true,
    chunkFilename: "chunk/[name]-chunk.js"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack代码分离优化",
      template: "./index.html"
    })
  ],
  optimization: {
    // runtimeChunk: "single",
    // 利用内置SplitChunksPlugin, 实现代码分离
    splitChunks: {
      // all, async, initial三种取值
      chunks: "all",
      // 模块导入次数
      minChunks: 1,
      // 手动配置
      cacheGroups: {}
    },
    // chunkIds: "deterministic"
    // 所有通过import导入的模块都单独进行打包
    runtimeChunk: {
      // object 自定义文件name
      name: "hello"
    }
  }
}

module.exports = config