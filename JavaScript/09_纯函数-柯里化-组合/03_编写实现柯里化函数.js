function foo(x, y, z) {
  return x + y + z
}

/**
 * @param {} fn 传入一个普通函数
 * @returns 返回一个被柯里化后的函数
 */
function curring(fn) {
  // 返回一个被柯里化后的函数
  return function curried(...args) {
    // 执行柯里化后的函数, 做判断传入函数参数对比fn函数形参
    if(args.length >= fn.length) {
      // 函数参数大于fn形参, 则柯里化函数直接传入所有参数直接调用并返回结果, 注意这里的this绑定
      return fn.apply(this, args)
    } else {
      // 小于fn形参情况, 
      return function curried2(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

var curringFoo = curring(foo)
console.log(curringFoo(10, 20)(30));

