# webpack 插件Plugins

  1. loader是用于打包解析模块、plugin贯穿整个webpack生命周期,用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等；
  2. CleanWebpackPlugin(第三方插件), 每次执行打包自动清理dist文件, 而不用手动删除
  3. HtmlWebpackPlugin(第三方插件), 正常连同html也要打包进dist目录中, htmlplugin则帮我们自动生成模板打包, 也可以自定义模板
  ```javascript
    new HtmlWebpackPlugin({
      title: "webpack案例", // 定义html中title标题
      template: "./public/index.html" // 引用自定义模板
    }),
  ```
  4. DefinePlugin(webpack内置插件), 用于定义上下文变量
  ```javascript
    new DefinePlugin({
      BASE_URL: " './' "
    }),
  ```
  5. CopyWebpackPlugin(第三方插件), html文件一般用于模板生成, 而连同html其它的资源文件一般都是直接复制过去的
  ```javascript
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            to: "./",
            globOptions: {
              ignore: [
                "**/index.html"
              ]
            }
          }
        ]
      })
    ]
  ```
# webpack 其它
  1. development 开发模式
    production 生产模式
    mode: "development",
    devtool: "source-map",  //生成关系映射,方便快速查找定位错误