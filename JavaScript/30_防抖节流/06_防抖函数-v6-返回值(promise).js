function debounce(fn, interval, immediate = false) {  // callback返回值只是第一种方式

  let timer = null
  let isFlag = false

  function _debounce(...args) {
    
    // 利用Promise方式作为返回值回调
    return new Promise((resolve, reject) => {
      // 做上一次的清除
      if(timer) clearTimeout(timer)
      // 做首次立即执行的判断
      if(immediate && !isFlag) {
        try {
          const result = fn.apply(this, args)
          resolve(result)
        } catch(e) {
          reject(e)
        }
        // 修改控制变量
        isFlag = true
      } else {
        timer = setTimeout(() => {
          try {
            const result = fn.apply(this, args)
            resolve(result)
          } catch(e) {
            reject(e)
          }
          isFlag = false
        }, interval);
      }
    })
  }

  _debounce.cancel = function() {
    if(timer) clearTimeout(timer)
    timer = null
    isFlag = false
  }

  return _debounce

}