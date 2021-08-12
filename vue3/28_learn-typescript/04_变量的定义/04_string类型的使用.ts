let msg1: string = "tang"
let msg2: string = "hello"

// 默认情况下, 如果可以推导出对应的标识符的类型时, 一般情况下是不加
const name = "tang"
const age = 19
const height = 1.99

let msg3: string = `${name}${age}${height}`
console.log(msg3)

export {}