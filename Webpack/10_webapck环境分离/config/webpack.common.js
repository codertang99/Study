const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  context: path.resolve(__dirname, "../"),
  // entry的相对路径是基于context上下文的
  entry: "./src/index.js",
  output: {
    filename: "js/build.js",
    path: path.resolve(__dirname, "../build"),
    clean: true,
    publicPath: "/"
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "devServer",
      template: "./index.html"
    }),
    new VueLoaderPlugin()
  ],
  // resolve: {
  //   extensions: [".js", ".jsx", ".json", ".ejs"],
  //   mainFields: ["index"],
  //   alias: {
  //     "@": path.resolve(__dirname, "./src")
  //   }
  // }
}