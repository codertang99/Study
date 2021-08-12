const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "my-bundle.js",
    // assetModuleFilename: "static/[name]-[hash:6][ext]"  在output中的一种方式、对资源模块打包文件管理
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader" },
          { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" } // 内部其实依赖lessc 帮助编译执行 所以必须安装less才能进行解析执行
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader", 
      //       options: {
      //         outputPath: "images",
      //         name: "[name]-[hash:6].[ext]"
      //       } 
      //     }
      //   ]
      // },
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader", 
      //       options: {
      //         outputPath: "images",
      //         name: "[name]-[hash:6].[ext]",
      //         limit: 100 * 1024   // 做大小的限制, 一般较小的图片经过base64编码, 减轻服务器压力
      //       }
      //     }
      //   ]
      // }
        {
          test: /\.(jpe?g|gif|png)$/,
          type: "asset",
          // parser: {
          //   dataUrlCondition: {
          //     maxSize: 10000 * 1024
          //   }
          // },
          generator: {
            filename: "images/[name]-[hash:6][ext]"
          }
        },
        {
          test: /\.(eot|ttf|woff2?)$/,
          // use: [
          //   { 
          //     loader: "file-loader", 
          //     options: {
          //       outputPath: "font",
          //       name: "[name]-[hash:6].[ext]"
          //     } 
          //   }
          // ]
          type: "asset/resource",
          generator: {
            filename: "font/[name][hash][ext]"
          }
        }
    ]
  }
}