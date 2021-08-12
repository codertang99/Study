const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "my-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader"
        use: [
          "style-loader",
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            // options: {
            //   postcssOptions: {
            //     plugins: [
            //       require("autoprefixer")
            //     ]
            //   }
            // }

            // 直接通过options添加一些配置选项 依赖postcss中的一些插件 、 autoprefixer, postcss-preset-env
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" } // 内部其实依赖lessc 帮助编译执行 所以必须安装less才能进行解析执行
        ]
      }
    ]
  }
}