function foo(n1, n2) {
  console.log(arguments);

  // 1. for 循环转array
  var arr1 = []
  for(var i=0; i< arguments.length; i++) {
    arr1.push(arguments[i])
  }
  console.log(arr1);

  // 2. 利用Array原型上的slice方法, 绑定this
  var arr2 = Array.prototype.slice.call(arguments)
  console.log(arr2);

  // 3. 与2同理
  var arr3 = [].slice.call(arguments)
  console.log(arr3);

  // 4. es6数组扩展
  var arr4 = [...arguments]
  console.log(arr4);

  // 5. Array.from方法
  var arr5 = Array.from(arguments)
  console.log(arr5);

}

foo(1, 2, 3, 4)

// 箭头函数中没有this和arguments, 没有会直接向上一层作用域中寻找