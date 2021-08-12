# webpack 初体验
  1. webpack是一个为现代化静态模块化打包工具, 对处理一些css, js, ts,es6,图片等浏览器不能直接识别的进行打包处理成浏览器能够直接识别
# 基本使用
  webpack webpack-cli 
  通过配置webpack.config.js 文件(可通过--config方式指定其它配置文件名)
  基本配置如下
  ```javascript
    module.exports = {
      entry: "./src/main.js", // 入口文件
      output: { // 出口文件
        path: path.resolve(__dirname, "./build/"),  // 路径
        filename: "my-bundle.js"  // 打包文件名
      }
    }
  ```