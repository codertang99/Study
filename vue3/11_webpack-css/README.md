# webpack-css、loader的使用

1. 默认情况下不会对css等进行解析, 需要对应的loader进行配置打包生效解析
css-loader使用方式
  1. 内联使用 css-loader!../css/style.css
  2. 脚手架(5已不使用这种方式)
  3. 配置方式 
    module: {
      rules: [
        {
          test: /\.css$/,正则匹配对应类型需要解析的文件,
          loader有多种写法
          loader: "css-loader" 语法糖方式一
          use: [
            "css-loader",
            {loader: "css-loader", options: {}}
          ]
        },
        {}
      ]
    }
2. { loader: "less-loader" }  内部其实依赖lessc 帮助编译执行 所以必须安装less才能进行解析执行
3. { loader: "style-loader" } 把style样式插入html中
4. { loader: "postcss-loader",
     options: {
        postcssOptions: {
          plugins: [
            require("autoprefixer")
          ]
        }
      }
     直接通过options添加一些配置选项 依赖postcss中的一些插件 、 autoprefixer, postcss-preset-env
    }
  依赖postcss和postcss-cli
  还可以把plugins抽取成postcss.config.js 配置文件
  ```javascript
    module.exports = {
      plugins: [
        // require("autoprefixer")
        require("postcss-preset-env") // 比autoprefixer更强大, 会自动帮助我们添加autoprefixer（所以相当于已经内置了autoprefixer）
        //可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环境,添加所需的polyfill
      ]
    }
  ```