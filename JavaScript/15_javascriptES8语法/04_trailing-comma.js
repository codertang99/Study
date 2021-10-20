// 传统方式函数调用传参定义参数后最后一个参数是不可以加 , 号的
function foo(n, m) {
  console.log(n, m);
}

// ES8最新语法, 可以添加逗号
foo(1, 3, )