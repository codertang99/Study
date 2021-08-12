const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.com.config")

module.exports = merge(commonConfig, {
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    })
  ]
})