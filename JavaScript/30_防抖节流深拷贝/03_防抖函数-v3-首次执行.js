function debounce(fn, interval, immediate = false) {

  let timer = null
  let isFlag = false

  function _debounce(...args) {
    // 做上一次的清除
    if(timer) clearTimeout(timer)
    // 做首次立即执行的判断
    if(immediate && !isFlag) {
      fn.apply(this, args)
      // 修改控制变量
      isFlag = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isFlag = false
      }, interval);
    }
  }

  return _debounce

}