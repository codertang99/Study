// 全局变量
let globalReactive = null

// 这里是我们的原始对象
// const obj = {
//   name: "tang",
//   age: 20
// }

// dep类
class Depend {
  constructor() {
    // 存放依赖函数, 对应一个对象属性对应一个数组对象存放依赖
    // 使用set是为了不然同样的依赖函数重复
    this.reactiveFn = new Set()
  }
  
  // 添加依赖
  depend() {
    // 如果不为空则添加进set中
    if(globalReactive)
      this.reactiveFn.add(globalReactive)
  }

  // 通知更新
  notify() {
    // 遍历执行每一个依赖函数
    this.reactiveFn.forEach(fn => {
      fn()
    })
  }
}

// 这里是封装的收集依赖的函数
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

// 把创建的代理对象, 封装成函数
function reactive(obj) {
  // 这里使用Object.defineProperty方式
  // 这里遍历对象的所有key
  Object.keys(obj).forEach(function(key) {
    // 当前函数作用域的值
    let objValue = obj[key]
    // 利用defineProperty设置属性描述符
    Object.defineProperty(obj, key, {
      // set方法
      set: function(value) {
        // 利用作用域链修改当前的属性
        objValue = value
        // 获取依赖并通知更新
        const dep = getDepend(obj, key)
        dep.notify()
      },
      // get方法
      get: function() {
        // 获取依赖, 并收集依赖
        const dep = getDepend(obj, key)
        dep.depend()
        // 返回对象值
        return objValue
      }
    })
  })

  return obj
}

// 直接调用函数创建对象
const obj = reactive({
  name: "hello",
  age: 20
})

watchFn(function() {
  console.log(obj.name);
  console.log(obj.age);
})

obj.name = "aaa"