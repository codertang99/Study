const text = "您好呀"

const buffer = Buffer.from(text)
console.log(buffer)


// 采用不同编码方式
const buffer2 = Buffer.from(text, "utf16le")
console.log(buffer2)