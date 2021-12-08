const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader")

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(
      __dirname,
      "./build"
    ),
    filename: "js/build.js",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/i,
        // 排除node_modules
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
        ],
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      }    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "babel理解与使用",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
