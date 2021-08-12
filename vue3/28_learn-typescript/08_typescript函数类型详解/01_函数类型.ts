function foo(num: number, num2: number) : number {
  return num + num2
}

type FnType = (num1: number, num2: number) => number

function calc(fn: FnType) {
  console.log(fn(20, 30))
}

const decrement = (num1: number, num2: number) => {
  return num1 - num2
}


calc(decrement)

console.log(
function(num1: number, num2: number): number {
  return num1 + num2
}(1, 2))