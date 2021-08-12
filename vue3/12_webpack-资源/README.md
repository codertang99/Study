# webpack打包资源

# 图片资源打包
  - file-loader的使用
    1. 使用图片资源时须使用import 或 require方式导入引用图片资源, 使用字符路径webpack不会进行解析
    2. options: {
      outputPath: "images",
      name: "[name]-[hash:6].[ext]"
    }
  - url-loader的使用
    1. 也是对文件资源进行打包处理的一个loader
    2. options: {
      outputPath: "images",
      name: "[name]-[hash:6].[ext]",
      limit: 1024 // byte单位
    }
  - asset module type 的使用(webpack5对资源打包的一种方式)
    {
      test: /\.(jpe?g|gif|png)$/,
      type: "asset",    // 需要打包的类型
      parser: {   // base64编码
        dataUrlCondition: {
          maxSize: 10000 * 1024
        }
      },
      generator: {  // 打包文件的配置
        filename: "images/[name]-[hash:6][ext]"
      }
    }
  - 字体图标的打包方式(file-loader的方式打包)、还可以使用asset方式打包
    1. 
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