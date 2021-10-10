var message = "hello"

var obj = {
  name: "tang",
  age: 19,
  cot: {
    h: "hhh"
  }
}

// with 语句, 方便访问对象中的属性, 不建议使用, 强行加了一层作用域
with(obj.cot) {
  console.log(h);
}