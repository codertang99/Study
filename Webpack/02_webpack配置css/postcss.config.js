// 这里如果多个配置文件都使用到postcss的配置转换, 可以提取出配置文件

module.exports ={
  plugins: [
    require("postcss-preset-env")
  ]
}