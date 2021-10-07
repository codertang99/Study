//  new绑定 > 显示绑定 > 隐式绑定 > 直接绑定
// bind > call/apply

var obj = {
  name: "tang",
  bar: function() {
    console.log(this);
  }
}

obj.bar.call("ab")

var foo = obj.bar.bind("hhhh")
var a = new foo() // new 函数对象

obj.bar.bind("ccc").call("aaaa")  // bind > call/apply