// 开始的pending状态
const STATUS_PENDING = "STATUS_PENDING"
// resolve后的fulfilled状态
const STATUS_FULFILLED = "STATUS_FULFILLED"
// reject后的rejected
const STATUS_REJECTED = "STATUS_REJECTED"

class MyPromise {
  // 执行器函数
  constructor(executor) {
    // 初始状态为pending
    this.status = STATUS_PENDING
    // resolve传入的value值
    this.value = undefined
    // reject传入的reason值
    this.reason = undefined

    // resolve函数
    const resolve = (value) => {
      // 注意这里状态一经改变就不变换 -> 所有需要做判断
      if(this.status === STATUS_PENDING) {
        // 改变状态
        this.status = STATUS_FULFILLED
        // 放入微任务 -> 先执行完then函数保存对应函数, 再回调微任务的方法
        queueMicrotask(() => {
          this.value = value
          this.onfufilled(value)
        })
      }
    }

    // reject函数
    const reject = (reason) => {
      if(this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onrejected(reason)
        })
      }
    }

    // 直接执行
    executor(resolve, reject)

  }

  then(onfufilled, onrejected) {
    // 保存then的onfufilled函数和onrejected函数, 再调用resolve或reject的时候方便进行回调
    this.onfufilled = onfufilled
    this.onrejected = onrejected
  }

}

const pro = new MyPromise((resolve, reject) => {
  // console.log("hello");
  // resolve("resolve")
  reject("reject")
})

pro.then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})