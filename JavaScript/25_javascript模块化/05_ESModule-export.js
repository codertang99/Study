// 导入的第一种方式
// export const cname = "tang"
// export const age = 20

const str = "EDG 牛逼"
const age = 20
// 需要注意的是, export {} 导出的不是一个对象, 这是一个固定的语法
// 不可以像对象那样使用
export {
  str,
  age as myAge
}