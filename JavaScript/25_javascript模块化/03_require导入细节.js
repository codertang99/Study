/**
 * require导入大致分为三类
 *  1 -> require导入node内置模块
 *  2 -> require导入自定义文件
 *  3 -> require导入第三方
 */

// 通过require函数传入核心模块
const path = require("path")
const fs = require("fs")


// 通过require函数导入自定义文件
/**
 * 这里有一个小细节
 * 通常require函数传入的是字符串, 这里有一个路径的问题
 *  / -> 根路径  ./ -> 相对路径  ../ 上一层路径
 * 导入的后缀可以不指定, 如果不指定则会默认去寻找 js json node 后缀名字的文件
 */
// const bar = require("./bar.cjs")


// 通过require函数导入第三方模块
/**
 * 通过npm或yarn安装的第三方模块
 * require会默认去当前目录下寻找node_modules文件夹去寻找axios文件下module.exports导出的对象
 * 如果没有则一直往上一层寻找, 直到根路径
 */
const axios = require("axios")

/**
 * [
  'C:\\codertang\\Study\\JavaScript\\25_javascript模块化\\node_modules',
  'C:\\codertang\\Study\\JavaScript\\node_modules',
  'C:\\codertang\\Study\\node_modules',
  'C:\\codertang\\node_modules',
  'C:\\node_modules'
  ]
 */
console.log(module.paths);