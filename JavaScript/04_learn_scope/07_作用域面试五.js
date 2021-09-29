function foo() {
  var a = b = 10  // b是挂载在go上的, a是在ao上的
}

foo()

console.log(a);   // 报错
console.log(b);   // 可以访问
