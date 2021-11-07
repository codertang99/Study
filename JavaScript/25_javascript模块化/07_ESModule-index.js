// 通过我们有一个规范, 对一个模块或一个组件通常会有一个统一的出口用于导出所有
// 通常命名就是通过index来导出

// 第一种方式, 一个个导入index, 再index文件中统一导出
// import { str } from "./05_ESModule-export"
// export {
//   str
// }

// 第二种方式, 直接通过export * 导出所有
// export * from "./05_ESModule-export"
export * from "./08_ESModule-default"

// 第三种方式, 直接通过export {} 导出一个一个
export { str } from "./05_ESModule-export"