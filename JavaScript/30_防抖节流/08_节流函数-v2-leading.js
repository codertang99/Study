function throttle(fn, interval, leading = true) {
  let lastTime = 0

  const _throttle = function(...args) {

    const newTime = new Date().getTime()
    if(!lastTime && !leading) lastTime = newTime

    const resultTime = interval - (newTime - lastTime)

    if(resultTime <= 0) {
      fn.apply(this, args)
      lastTime = newTime
    }



  }

  return _throttle
}