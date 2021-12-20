const path = require("path")
const { DllReferencePlugin } = require("webpack")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
      // 使用terserplugin, 对代码进行压缩和丑化, 里面可自定义配置
      new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            toplevel: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: "all"
    }
  }
}

module.exports = config