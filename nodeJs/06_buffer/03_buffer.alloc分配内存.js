// 创建一个buffer长度为8
const buffer = Buffer.alloc(8) //默认情况下 <Buffer 00 00 00 00 00 00 00 00>
console.log(buffer)

buffer[0] = 100 
buffer[1] = 0x100
console.log(buffer.toString())