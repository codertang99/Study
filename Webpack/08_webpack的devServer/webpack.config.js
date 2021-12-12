const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const RecatRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  // 直接开启watch监听
  /**
   * 这种形式, 每次都需要重新编译
   * 然后依赖vscode liveser的插件, 进行重新加载, 会刷新浏览器, 无法支持模块热替换
   */
  // watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "js/build.js",
    path: path.resolve(__dirname, "./build"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.vue$/i,
        exclude: /node_modules/,
        loader: "vue-loader"
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "devServer",
      template: "./index.html"
    }),
    new RecatRefreshWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    hot: true
  }
}

module.exports = config