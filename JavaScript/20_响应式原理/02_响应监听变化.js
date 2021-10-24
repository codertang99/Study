// 这里是我们的原始对象
const obj = {
  name: "tang",
  age: 20
}

// dep类
class Depend {
  constructor() {
    // 存放依赖函数, 对应一个对象属性对应一个数组对象存放依赖
    // 使用set是为了不然同样的依赖函数重复
    this.reactiveFn = new Set()
  }
  // 添加依赖
  addDepend(fn) {
    // 把所有依赖push进数组
    this.reactiveFn.push(fn)
  }

  depend() {
    this.reactiveFn.add(globalReactive)
  }

  // 通知更新
  notify() {
    console.log(this.reactiveFn);
    // 遍历执行每一个依赖函数
    this.reactiveFn.forEach(fn => {
      fn()
    })
  }
}

function watchFn(fn) {
  globalReactive = fn
  fn()
  globalReactive = null
}

// 创建一个weakMap存放所有对象的依赖关系
// weakmap -> obj -> map -> name 和 age -> dep, 注意是这样的数据结构
const weakMap = new WeakMap()
// 根据对象和属性名, 最终要给我们返回一个dep对象
function getDepend(target, key) {
  // 这里获取对应对象的所有map关系
  let map = weakMap.get(target)
  // 这里可能会没有, 因为第一次进入是没有的
  if(!map) {
    map = new Map()  // 第一次进入创建对象的Map
    weakMap.set(target, map)   // 设置进weakmap中
  }
  // 这里根据对象的key获取对应属性的dep对象
  let dep = map.get(key)
  // 同理这里可能也不存在
  if(!dep) { 
    dep = new Depend()
    // 这里根据key获取dep获取不到, 根据key名重新创建dep设置map对象中
    map.set(key, dep)
  }
  return dep
}

// 创建代理对象
const proxyObj = new Proxy(obj, {
  // 重写监听器
  set: function(target, key, value, receiver) {
    // 利用Reflect对源对象进行操作
    Reflect.set(target, key, value, receiver)
    // 传入对应对象和key, 返回对应代理对象
    const dep = getDepend(target, key)
    // 通知所有依赖执行
    dep.notify()
  },
  get: function(target, key, receiver) {

    return Reflect.get(target, key, receiver)
  }
})