// 通常我们通过export方式导出, 名字必须统一, 或使用as关键字起别名
// 而default导出, 可以使用自定义名字来使用, 需要注意的是它是和export独立开来的另一种方式

const name = "tang"
const age = 29

// export {
//   name,
//   // 把age当作一种default导出
//   age as default
// }

// 直接default导出
export default {
  name, age
}