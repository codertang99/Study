// import导入的方式是编译时语法, 在编译时就需要知道依赖关系

// 我们可以使用import()函数来动态导入
// 注意它是异步的, 返回的是一个promise
import("./05_ESModule-export.js").then(res => {
  console.log("res", res);
})

console.log("aaaa");