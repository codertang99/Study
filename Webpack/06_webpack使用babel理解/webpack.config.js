const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/build.js",
    clean: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        // 排除node_modules
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: [
            //     require("@babel/preset-env")
            //   ],
            //   plugins: [
            //     require("@babel/plugin-transform-arrow-functions"),
            //     require("@babel/plugin-transform-block-scoping")
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.ts$/i,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "babel理解与使用",
      template: "./index.html"
    })
  ]
}