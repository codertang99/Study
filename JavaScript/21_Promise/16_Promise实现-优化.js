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
    // 多次调用then的fulfilled函数
    this.onfulfilledFns = []
    // 多次调用then的rejeted函数
    this.onrejetedFns = []

    // resolve函数
    const resolve = (value) => {
      // 注意这里状态一经改变就不变换 -> 所有需要做判断
      if(this.status === STATUS_PENDING) {
        // 放入微任务 -> 先执行完then函数保存对应函数, 再回调微任务的方法
        queueMicrotask(() => {
          if(this.status !== STATUS_PENDING) return
          // 改变状态
          this.status = STATUS_FULFILLED
          this.value = value
          // this.onfufilled(value)
          this.onfulfilledFns.forEach(fn => {
            fn()
          })
        })
      }
    }

    // reject函数
    const reject = (reason) => {
      if(this.status === STATUS_PENDING) {
        queueMicrotask(() => {
          if(this.status !== STATUS_PENDING) return
          this.status = STATUS_REJECTED
          this.reason = reason
          // this.onrejected(reason)
          this.onrejetedFns.forEach(fn => {
            fn()
          })
        })
      }
    }

    // 直接执行
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }

  }

  then(onfulfilled, onrejected) {
    // 保存then的onfufilled函数和onrejected函数, 再调用resolve或reject的时候方便进行回调
    // this.onfufilled = onfufilled
    // this.onrejected = onrejected

    // 返回一个新promise用于链式调用
    return new MyPromise((resolve, reject) => {
      // 如果状态已经改变则直接执行执行就可以
      if(onfulfilled && this.status === STATUS_FULFILLED) {
        // 这里对应then的fulfilled回调函数, 如果有return则直接resolve对应结果
        try {
          const value = onfulfilled(this.value)
          resolve(value)
        } catch(err) {
          reject(err)
        }
      }

      if(onrejected && this.status === STATUS_REJECTED) {
        // 注意 -> 这里then对应rejected回调, 如果有return -> 是resolve, 只有抛出异常才是到rejected回调
        try {
          const reason = onrejected(this.reason)
          resolve(reason)
        } catch(err) {
          reject(err)
        }
        
      }
      
      // 如果当前为pending状态则放入数组中, 等待回调执行
      if(this.status === STATUS_PENDING) {
        this.onfulfilledFns.push(() => {
          try {
            const value = onfulfilled(this.value)
            resolve(value)
          } catch(err) {
            reject(err)
          }
        })
        this.onrejetedFns.push(() => {
          try {
            const reason = onrejected(this.reason)
            resolve(reason)
          } catch(err) {
            reject(err)
          }
          
        })
      }
    })
    
  }

}

const pro = new MyPromise((resolve, reject) => {
  // console.log("hello");
  // resolve("resolve")
  // reject("reject")
  // throw new Error(11)
  resolve("1")
  reject("2")
})

pro.then((res) => {
  console.log("res1", res);
  return 111
}, (err) => {
  console.log("err1", err);
  return 999
}).then(res => {
  console.log("hhh", res);
  return 111
}).then(res => {
  console.log("object", res);
})

// pro.then((res) => {
//   console.log("res2", res);
// }, (err) => {
//   console.log("err2", err);
// })

// setTimeout(() => {
//   pro.then(res => {
//     console.log("res3", res);
//   }, err => {
//     console.log("err3", err);
//   })
//   pro.then(res => {
//     console.log("res4", res);
//   }, err => {
//     console.log("err4", err);
//   })
// }, 1000);