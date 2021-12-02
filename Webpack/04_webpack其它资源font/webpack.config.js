const path = require("path")
const { DefinePlugin } = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/build.js",
    clean: true
    // assetModuleFilename: "img/[name]-[hash:4][ext]"
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
      {
        test: /\.(png|svg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[hash:6][ext]"
        },
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 100 * 1024
        //   }
        // }
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name][hash:5][ext]"
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "other resource",
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    })
  ]
}

module.exports = config