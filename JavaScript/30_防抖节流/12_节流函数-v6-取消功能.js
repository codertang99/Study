function throttle(fn, interval, leading = true, trailing = false, callback) {
  let lastTime = 0
  let timer = null

  const _throttle = function(...args) {

    return new Promise((resolve, reject) => {
      const newTime = new Date().getTime()
      if(!lastTime && !leading) lastTime = newTime

      const resultTime = interval - (newTime - lastTime)

      if(resultTime <= 0) {
        if(timer) {
          clearTimeout(timer)
          timer = null
        }
        const result = fn.apply(this, args)
        if(callback && typeof callback === "function") callback(result)
        resolve(result)
        lastTime = newTime
        return
      }

      if(trailing && !timer) {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          if(callback && typeof callback === "function") callback(result)
          resolve(result)
          timer = null
          lastTime = !leading ? 0 : new Date().getTime()
        }, resultTime);
      }
    })


  }

  _throttle.cancel = function() {
    if(timer) clearTimeout(timer)
    lastTime = 0
    timer = null
  }

  return _throttle
}