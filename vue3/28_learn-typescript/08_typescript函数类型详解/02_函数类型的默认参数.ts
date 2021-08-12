// 默认参数可以看作是undefined类型和对应类型的联合类型, 当不传递或传递undefined时使用默认值参数
// 推荐默认值参数写在必传参数的后面
function foo(a: string, b: number = 10) {
  console.log(a, b)
}