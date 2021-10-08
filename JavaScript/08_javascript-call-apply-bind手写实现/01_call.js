// 通过prototype方式在Function构造器中添加实现方法
// thisArgs -> 传入的this
// ...args -> 传入的剩余参数
Function.prototype.mycall = function(thisArgs, ...args) {
  // 保存当前调用的this, 也就是当前调用函数
  var currFn = this

  // 做三元判断,对thisArgs做包装防止普通类型报错问题, 如果传入的thisArgs有值则使用当前包装后的thisArgs, 没有则是window
  thisArgs = thisArgs ? Object(thisArgs) : window

  // 在当前thisArgs添加函数做隐式调用, 这样会在对象中多一个fn属性
  thisArgs.fn = currFn
  
  // 隐式调用, 如果有参数则传入args剩余参数, 同时返回结果
  var result = thisArgs.fn(...args)

  // 调用完成后, 删除fn属性
  delete thisArgs.fn

  // 做完所有操作后返回结果
  return result
  
}

function foo() {
  console.log("hello", this);
}

foo.mycall({name: 1, age: 00}, 1, 2, 3, 5)