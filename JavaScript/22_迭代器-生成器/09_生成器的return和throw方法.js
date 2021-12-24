function *foo() {
  
  console.log("开始~");
  let value1;
  try {
    value1 = yield "第一个"
  } catch(err) {
    console.log(err);
  }

  // 相当于在这里加了一个return 即中断执行

  console.log("value1", value1);

  const value2 = yield "第二个"

  console.log("value2", value2);

}

const generator = foo()

console.log(generator.next());
// 强制中断异常, 直接在上一个yield中报错, 需要在代码中try catch捕获才会继续执行
console.log(generator.throw("异常"));

// 强制中断执行, 退出是函数无法继续执行
console.log(generator.return("hhh"));