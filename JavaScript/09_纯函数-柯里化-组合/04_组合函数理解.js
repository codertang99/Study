function square(n) {
  return n ** 2
}

function add(m) {
  return m + 2
}

function compose(m, n) {
  return function(num) {
    return n(m(num))
  }
}

var pose = compose(add, square)

console.log(pose(2));

function myCompose(...fns) {
  var length = fns.length
  for(var i=0; i<length; i++) {
    if(typeof fns[i] !== "function") {
      throw new TypeError("Exceptions Functions")
    }
  }

  return function(...args) {
    var index = 0
    var result = fns[index].apply(this, args)
    while(++index < length) {
      result = fns[index].call(this, result)
    }

    return result

  }

}

var ss = myCompose(add, square)

console.log(ss(20));