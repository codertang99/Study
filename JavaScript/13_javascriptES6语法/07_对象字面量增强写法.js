var name = "tang"
var age = 100

var obj = {
  name: name,
  age,  // 属性的简写
  foo: function() {
  },
  // 方法的简写, 需要注意的是这种不是箭头函数的简写
  bar() {
    console.log("bar");
  },
  baz: () => {
    console.log(this);
  },
  // 计算属性名
  [name+1234]: "helloWorld"
}

obj.baz() // window