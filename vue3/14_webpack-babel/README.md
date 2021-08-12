# webpack babel使用

  1. @babel/core、@babel/cli, babel的核心, 单独使用babel必须安装
  2. npx babel [转换的文件或文件夹] --out-[file或者dir] [输出的文件或文件夹] [--puligins或者--presets] [后面使用对应的plugins或presets进行转换]
  3. babel-loader的使用
  ```javascript
    {
      test: /\.js$/,
      use: [
        loader: "babel-loader",
        options: {
          [plugins||presets]: [
            "@babel/preset-env"或者["@babel/preset-env"]
          ]
        }
      ]
    }
  ```
  4. 可用通过babel.config.js或者.babelrc.js配置文件的方式配置babel
  ```javascript
    module.exports = {
      plugins: [
      ]
      或者
      presets: [
      ]
    }
  ```