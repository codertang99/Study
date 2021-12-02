const path = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      // {
      //   test: /\.jpeg/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "img/[name].[hash:6].[ext]"
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpeg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "img",
              name: "[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "other resource"
    }),
  ]
}

module.exports = config