// 通过proxy的方式
const obj = {
  name: "tang",
  age: 100
}

// 通过Proxy类, new方式代理对象, 创建一个代理后的对象
// 参数一被代理对象, 参数二设置对应的捕获器
const proxy = new Proxy(obj, {
  // 重写get捕获器, 对对象访问, 参数 -> 被代理对象, 获取的key值, receiver
  get: function(target, key, receiver) {
    console.log(`${target}对象的${key}值被获取了`);
    return target[key]
  },
  // 重写set捕获器, 对对象属性添加和设置值, 参数 -> 被代理对象, 获取的key值, 设置新的值, receiver, 在set中新增加属性也会在此监听
  set: function(target, key, newValue, receiver) {
    console.log(`${target}对象的${key}值被设置为${newValue}了`);
    target[key] = newValue
  },
  // 重写has捕获器, 判断属性是否在对象中 in 调用
  has: function(target, key) {
    console.log(`${key}属性是否在${target}对象中`);
    return key in target
  },
  // 重写deleteProperty捕获器, 监听删除对象属性
  deleteProperty: function(target, key) {
    console.log(`${target}对象删除${key}`);
    delete target[key]
  }
})

// 除此之外还有其它多个捕获器方法可以重写, 这里不再做阐述

// 我们知道函数也是一个对象, proxy也可以对函数进行监听
// 有两个专门的捕获器对函数的调用方式进行监听
function foo() {
  console.log(arguments);
}

const fProxy = new Proxy(foo, {
  // 对函数的调用进行监听, 参数 -> 目标对象, this指向, 参数列表
  apply: function(target, thisArgs, argsArray) {
    console.log(`${target}函数被调用了 -> ${thisArgs}指向 -> ${argsArray}参数`);
    target.apply(thisArgs, argsArray)
  },
  // 对函数的new调用监听, 参数 -> 目标对象, 参数列表, newTarget
  construct: function(target, argsArr, newTarget) {
    console.log(`${target}被new调用了 -> ${argsArr}参数 -> ${newTarget}`);
    return new target(...argsArr)
  }
})

fProxy.apply({},["123"]) 

const c = new fProxy("123", "!23")