function debounce(fn, interval) {

  let timer = null

  function _debounce() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, interval);
  }

  return _debounce

}