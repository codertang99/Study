// 值为null和undefined时取值为问号后面的
const tang = "null" ?? "tang"

const msg = "" ? "tang" : "hello"

console.log(tang)
console.log(msg)

export {}