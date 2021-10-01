// this的显示绑定,   可以通过call, apply, bind的方式显示的给定一个this, 使其函数this指向传入的this
// call和apply都是显示绑定this的, 只不过call绑定this是后面参数是通过 , 方式分割传入的
// 而 apply 传入 this后面参数是通过数组方式传入对应参数
// 而bind方式通过绑定this不会立即执行函数, 而是返回一个新的函数的引用, 不影响前面被绑定的this的函数
function foo() {
  console.log(this);
}

var obj = {
  name: "tang"
}

foo() // window

foo.call("hhhh")
foo.apply(obj)

var bar = foo.bind("i am bind")
bar()