/***
 * declare 声明文件.d.ts 类型查找
 * 1. 内置类型声明(安装ts时、对应内置了类型声明文件lib.d.ts)
 * 2. 外部定义类型声明
 *    在一些第三方库中会带有外部定义类型声明
 *    而有些第三方库没有定义类型声明, 可以安装对应@type类型声明的包
 * 3. 自定义类型声明
 *    可以自己定义类型声明
 */
import axios from "axios";
import lodash from "lodash"   // 没有对应类型声明文件、可以自定义.d.ts类型声明或安装对应@type类型声明文件

import { time, number } from "./utils/main"

console.log(time.format("1"))
console.log(number.format(12))

console.log(lodash.join(["!23", "13123"]))

// import math from "./math"

// const tang: string = "hello tang";

// console.log(math(20, 30));
// console.log(tang);

console.log(name, age, height)

axios.get("/api/statistics").then(res => {
  console.log(res)
}).catch(res => {
  console.log(res)
})
const tang: string = "tang"
console.log(tang)

console.log(message("hello code_tang"))

const p = new Person("codertang", 20)
console.log(p)
