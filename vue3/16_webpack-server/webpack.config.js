const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  target: "web",
  // development 开发模式
  // production 生产模式
  mode: "development",
  devtool: "source-map",  //生成关系映射,方便快速查找定位错误
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "js/my-bundle.js",
    // assetModuleFilename: "static/[name]-[hash:6][ext]"  在output中的一种方式、对资源模块打包文件管理
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    open: true,
    // host: "0.0.0.0",
    port: "7777",
    compress: true, // gzip压缩
    proxy: {
      "/api": {
        target: "http://123.207.32.32:9001",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,  // HTTPS证书无效情况下
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: [],
    alias: {
      "@": path.resolve(__dirname, "./src")
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: " './' ",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}