function foo() {
  console.log(this);
}


foo.call("a")

foo.apply(null)
var bar = foo.bind(undefined)
bar()

// apply/call/bind, 方法进行显示绑定, 如果绑定undefined或null时, 会帮我们进行忽略调用直接时window


var obj1 = {
  name: "tang",
  foo: function() {
    console.log(this);
  }
}

var obj2 = {
  name: "aaa"
};

(obj2.bar = obj1.foo)() // 报错, 在进行()()方式调用如果前面的表达式没有加上; 会看作是一个整体相当于undefined()调用进而报错
//  以上()是独立的一个语句, 所以相当于独立调用, 所以this是window