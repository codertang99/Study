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
    // 处理rejected的回调, 如果传入空则直接抛出给下一个promise捕获
    onrejected = onrejected || (err => {throw err})

    onfulfilled = onfulfilled || (value => value)

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
        if(onfulfilled) this.onfulfilledFns.push(() => {
          try {
            const value = onfulfilled(this.value)
            resolve(value)
          } catch(err) {
            reject(err)
          }
        })
        if(onrejected) this.onrejetedFns.push(() => {
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

  catch(oncatch) {
    return this.then(undefined, oncatch)
  }

  finally(onfinally) {
    this.then(() => {
      onfinally()
    }, () => {
      onfinally()
    })
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(err) {
    return new MyPromise((resolve, reject) => {
      reject(err)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if(promises.length === values.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allsettled(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then((res) => {
          values.push({
            status: STATUS_FULFILLED,
            value: res
          })
          if(values.length === promises.length) resolve(values)
        }, err => {
          values.push({
            status: STATUS_REJECTED,
            reason: err
          })
          if(values.length === promises.length) resolve(values)
        })
      })
    })
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        })
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const reasons = []
      promises.forEach(promise => {
        promise.then(res => {
          resolve(res)
        }, err => {
          reasons.push(err)
          if(reasons.length === promises.length) {
            reject(new Error(reasons))
          }
        }) 
      })
    })
  }

}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 3000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333)
  }, 2000);
})

MyPromise.any([p1, p2, p3]).then(res => {
  console.log("all", res);
}, err => {
  console.log("err", err);
})