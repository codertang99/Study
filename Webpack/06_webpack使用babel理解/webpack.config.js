const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/build.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "babel理解与使用"
    })
  ]
}