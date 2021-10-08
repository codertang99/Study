Function.prototype.myapply = function(thisArgs, paramsArr = []) {
  var currFn = this

  thisArgs = thisArgs ? Object(thisArgs) : window

  thisArgs.fn = currFn

  var result = thisArgs.fn(...paramsArr)

  delete thisArgs.fn

  return result

}

function bar(str1, str2) {
  console.log(this, str1, str2);
}

bar.myapply("123")