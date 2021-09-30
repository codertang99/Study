function foo() {
  var name = "tang"
  var age = 20

  function baz() {
    debugger;
    console.log(name);
  }

  return baz

}

var temp = foo()
temp()