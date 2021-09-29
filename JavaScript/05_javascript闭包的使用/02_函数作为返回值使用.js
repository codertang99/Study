function makeAdder(count) {
  function add(num) {
    return count + num
  }
  return add
}

var add5 = makeAdder(5)

console.log(add5(3));