const path = require("path")
// import { Configuration } from 'webpack'
/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./src/index",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./build"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
            // options: {
            //   // 这里是post-loader所使用的一些配置选项
            //   postcssOptions: {
            //     plugins: [
            //       // require("autoprefixer")
            //       require("postcss-preset-env")
            //       // "postcss-preset-env"
            //     ]
            //   }
            // }
          }
          // 下面这种相当于完整的写法了
          // { loader: "css-loader", option:  }
        ]
        // 上面use的写法
        // loader: "css-loader"
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          // 同样如果这里也需要importLoaders
          "css-loader",
          "less-loader",
          "postcss-loader"
        ]
      }
    ]
  }
}
module.exports = config