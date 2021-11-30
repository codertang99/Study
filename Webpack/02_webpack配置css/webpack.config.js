const path = require("path")

module.exports = {
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
          "css-loader"
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
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}