Function.prototype.mybind = function(thisArgs, ...argArr) {
  var currFn = this

  thisArgs = (thisArgs!==undefined || thisArgs!==null) ? Object(thisArgs) : window

  return function(...arg) {
    thisArgs.fn = currFn
    var args = [...argArr, ...arg]
    var result = thisArgs.fn(...args)
    delete thisArgs.fn

    return result
  }
}


function foo(n1, n2) {
  console.log(n1, n2, this);

  return n1 + n2
}

var bar = foo.mybind({name: "tang"}, 10)
var result = bar(20)

console.log(result);