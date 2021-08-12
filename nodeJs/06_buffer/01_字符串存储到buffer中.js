const text = "hello";

// 通过new的方式创建buffer
// const buffer = new Buffer(text)
// console.log(buffer)

// 通过from方式创建buffer
const buffer2 = Buffer.from(text)
console.log(buffer2)