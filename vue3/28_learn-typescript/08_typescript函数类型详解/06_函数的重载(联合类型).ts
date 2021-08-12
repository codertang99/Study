// 普通联合类型可以利用类型缩小来区分不同类型的的重载
// 但是函数返回的类型为联合类型
type SNType = number | string

function add(a1: SNType, a2: SNType) {
  if(typeof a1 === "string" && typeof a2 === "string") {
    return a1 + a2
  } else if(typeof a1 === "number" && typeof a2 === "number") {
    return a1 + a2
  }
}

console.log(add(1, 2))
console.log(add("123", "123123"))