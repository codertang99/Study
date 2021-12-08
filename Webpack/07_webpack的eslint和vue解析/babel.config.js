
module.exports = {
  presets: [
    // 单独给presets预设传递参数, 与browseslistrc文件冲突, 会优先使用传递的
    [require("@babel/preset-env"), {
      // targets: "chrome 88"
      corejs: 3,
      // useBuiltIns: 
      // false -> 不做任何polyfill填充
      // usage -> 对代码中使用到的做补充
      // entry -> 对所有都进行补充
      useBuiltIns: "usage"
    }],
    [require("@babel/preset-react")],
    [require("@babel/preset-typescript")]
  ],
  // plugins: [
  //   [require("@babel/plugin-transform-runtime"), {
  //     corejs: 3
  //   }]
  // ]
}