const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "development",
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