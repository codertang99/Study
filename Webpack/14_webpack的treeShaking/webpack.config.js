const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
// 对css做tree shaking, 使用purgecssWebpackPlugin插件
const PurgecssWebpackPlugin = require("purgecss-webpack-plugin")
const glob = require("glob")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/build.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "tree shaking",
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:6].css"
    }),
    new CssMinimizerWebpackPlugin(),
    new PurgecssWebpackPlugin({
      paths: glob.sync(`${path.resolve(__dirname, "./src")}/**/*`, {nodir: true}),
      // safelist: function() {
      //   return {
      //     standard: ["body"]
      //   }
      // }
    })
  ],
  optimization: {
    // usedExports, 是否开启对模块的tree shaking, 会在指定模块添加标记(魔法注释), 
    usedExports: true,
    minimize: false,
    minimizer: [
      new TerserWebpackPlugin({
      })
    ]
  }
}

module.exports = config