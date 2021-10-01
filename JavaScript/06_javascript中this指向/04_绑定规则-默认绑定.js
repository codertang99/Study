// 默认情况下, 没有明确的调用者去调用函数, 那么这个this指向的是window

function foo() {
  console.log(this);  //window

  return function() {
    console.log(this);  // window
  }
}

var baz = foo()

baz()

