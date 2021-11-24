const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./build")
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://blocksapi.aachain.org",
        // target: "http://123.207.32.32:9001",
        pathRewrite: {
          "/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "ts-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TypeScript案例",
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}