function foo() {
  console.log(this);
}

foo() // window

var obj = {
  name: "tang",
  foo: foo
}

obj.foo() // obj

foo.call("hhh") // hhh