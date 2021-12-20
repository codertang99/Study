const path = require("path")
const { DllReferencePlugin } = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./index.js",
  output: {
    filename: "js/build.js",
    path: path.resolve(__dirname, "./build"),
    chunkFilename: "chunk/[name].chunk.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, "./dll/manifest.json")
    }),
    new AddAssetHtmlWebpackPlugin({
      publicPath: "./",
      filepath: path.resolve(__dirname, "./dll/dll_react.js")
    }),
    new HtmlWebpackPlugin({
      title: "DLL",
      template: "./index.html"
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false
      })
    ],
    splitChunks: {
      chunks: "all"
    }
  }
}

module.exports = config