
// 非空类型断言, 用此表示某个标识符是有值的
function foo(str?: string) {
  console.log(str!.length)
}

foo("")

foo("123")