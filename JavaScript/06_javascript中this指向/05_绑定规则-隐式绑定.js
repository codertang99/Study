// 隐式绑定, 判定一般看是谁发起调用, 那么这个this一般就指向发起者
function foo() {
  console.log(this.name);
}

var obj = {
  name: "tang",
  foo: foo
}

obj.foo() // obj

var bz = {
  name: "hunting",
  foo: obj.foo
}

bz.foo()  // bz