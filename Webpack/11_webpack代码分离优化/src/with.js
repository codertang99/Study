import _ from "lodash"

/**
 * 利用import函数异步导入的方式
 * webpack默认都会进行代码分离
 * 可以利用魔法注释来给异步打包的文件设置名字
 */
import(/* webpackChunkName: "foo" */"./foo").then(res => {
  console.log(res);
})

console.log(_.join(["!555", "555"], "12323"));

console.log("with")