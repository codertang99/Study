function debounce(fn, interval) {

  let timer = null

  function _debounce(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval);
  }

  return _debounce

}