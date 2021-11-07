// 通过import {} 语法进行引入
// 这里import引入的路径必须加上后缀
// 通过as关键字, 起别名
// import { str as myStr, myAge } from "./05_ESModule-export.js"

// 导入所有并起别名
import * as all from "./05_ESModule-export.js"

console.log(all);
