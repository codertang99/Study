function debounce(fn, interval, immediate = false, callback) {  // callback返回值只是第一种方式

  let timer = null
  let isFlag = false

  function _debounce(...args) {
    // 做上一次的清除
    if(timer) clearTimeout(timer)
    // 做首次立即执行的判断
    if(immediate && !isFlag) {
      const result = fn.apply(this, args)
      if(callback && typeof callback === "function") callback(result)
      // 修改控制变量
      isFlag = true
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        if(callback && typeof callback === "function") callback(result)
        isFlag = false
      }, interval);
    }
  }

  _debounce.cancel = function() {
    if(timer) clearTimeout(timer)
    timer = null
    isFlag = false
  }

  return _debounce

}