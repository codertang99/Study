function throttle(fn, interval, leading = true, trailing = false) {
  let lastTime = 0
  let timer = null

  const _throttle = function(...args) {

    const newTime = new Date().getTime()
    if(!lastTime && !leading) lastTime = newTime

    const resultTime = interval - (newTime - lastTime)

    if(resultTime <= 0) {
      if(timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(this, args)
      lastTime = newTime
      return
    }

    if(trailing && !timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
        lastTime = !leading ? 0 : new Date().getTime()
      }, resultTime);
    }


  }

  return _throttle
}