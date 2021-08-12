// never表示永远不可能发生值的类型

function foo() :never {
  while(true) {

  }
}

function bar() :never {
  throw new Error("错误")
}

// foo()
bar()

export {}