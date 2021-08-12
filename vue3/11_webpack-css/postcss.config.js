module.exports = {
  plugins: [
    // require("autoprefixer")
    require("postcss-preset-env") // 比autoprefixer更强大, 会自动帮助我们添加autoprefixer（所以相当于已经内置了autoprefixer）
    //可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环境,添加所需的polyfill
  ]
}