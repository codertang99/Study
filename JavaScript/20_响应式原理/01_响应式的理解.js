// 响应式理解, 就是对对象属性的操作的改变, 对其依赖的所有执行行代码都会自动进行刷新
const obj = {
  name: "tang",
  age: 10
}
// 这里对其对象某个属性进行依赖调用
console.log(obj.name);
// 比如这里, 对其对象属性的name对象的修改, 其对应对其依赖的地方都应该自动进行变化刷新, 这就叫做响应式
obj.name = "lucy"
// 很显然, 这里的对应上面的name, 应该再次调用, 这里假想自行调用
// console.log(obj.name);
// 我们可以利用函数的性质, 把对应依赖的代码封装成一个个的function, 这样, 进行依赖刷新的时候只要再次调用即可
// 封装成的依赖函数, 当然这里进行手动的写显然是不现实的, 对函数的依赖进行再次的封装, 把一个个函数放置成为一个数组
// 需要变化时, 依次调用即可
function foo() {
  console.log(obj.name);
}

// 这里存放一个个需要执行的函数
const reactiveFns = []
/**
 * 
 * @param {*} fn 传入依赖函数
 * 把依赖函数push进响应式数组里面
 */
function watchFn(fn) {
  reactiveFns.push(fn)
}
// 好了到了这里显然还不足以体现封装性, 这里我们都是自行封装自行调用
reactiveFns.forEach(fn => {
  fn()  // 依次执行即可
})

console.log("-----------------------------------------------------------------");

const obj2 = {
  name: "tang",
  age: 20
}

// 封装成类
class Depend {
  constructor() {
    // 在构造函数中的数组
    this.reactiveFns = []
  }
  // 添加依赖方法
  addDepend(fn) {
    this.reactiveFns.push(fn)
  }
  // 通知调用
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}
const depend = new Depend()
// 添加依赖
depend.addDepend(function() {
  console.log(obj.name);
  console.log("我是函数依赖111111");
})
depend.addDepend(function() {
  console.log(obj.name);
  console.log("我是函数依赖222222");
})
// 但是到了这里还是不够完整, 这里是对所有的依赖函数都进行了执行, 没有区别每一个对象中函数
depend.notify()