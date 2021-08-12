const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  target: "web",
  // development 开发模式
  // production 生产模式
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../build/"),
    filename: "js/my-bundle.js",
    // assetModuleFilename: "static/[name]-[hash:6][ext]"  在output中的一种方式、对资源模块打包文件管理
  },
  resolve: {
    extensions: [".js", ".mjs", ".json", ".vue", ".jsx", ".tsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
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
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "../public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: " './' ",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ]
}