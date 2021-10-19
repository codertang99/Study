/**
 * WeakSet -> ES6新增的数据类型
 *  1. 用于存放引用数据类型, 注意它是不可遍历的
 *  2. WeakSet存储的数据都是一个弱引用
 *    使用set存储的引用数据都是一个强引用类型, WeakSet存储的是一种弱引用
 *    在set存储中, 对内存进行释放的时候, set数据中还是会保存着存储引用数据的引用, 它不会进行释放
 *    而WeakSet中, 在对源数据进行释放的时候, WeakSet中存放的引用会一同被释放
 */

const set = new WeakSet()

// TypeError: Invalid value used in weak set
// 注意: 存放基本数据类型是会产生类型错误的
// set.add("")
const aa = {}
set.add(aa)
console.log(set);

const boo = set.delete(aa)
console.log(set);
console.log(set.has(aa));

// 应用场景
// 这里创建一个弱引用weakset对象存放产成的对象
const weakSet = new WeakSet()
class Person {

  constructor() {
    // 把新new的对象都放入weakset中
    weakSet.add(this)
  }

  running() {
    // 这里做判断, 如果是通过对象本身的方式去调用则正常调用
    // 否则抛出异常
    if(!weakSet.has(this)) {
      throw new TypeError("只能通过自身调用访问!!!!!!!")
    }
    console.log("running", this);
  }
}

const p = new Person()
// 正常来讲, 我们对对象中的方式都可以进行任何形式的调用, 可以绑定不同this指向, 这样调用都是成功的
p.running() // 这里正常打印
p.running.call({name: "tang"})  // 被限制后抛出异常