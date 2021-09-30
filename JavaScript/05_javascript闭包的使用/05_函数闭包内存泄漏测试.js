function createFn() {
  var arr = new Array(1024 * 1024).fill(10000)
  return function() {
    console.log(arr);
  }
}

var arr = []
for(var i=0; i<100; i++) {
  arr.push(createFn())
}

console.log(arr);