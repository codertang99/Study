const path = require("path")

// 获取路径的信息
const filepath = "/files/path/wen.txt"

console.log(path.dirname(filepath))
console.log(path.basename(filepath))
console.log(path.extname(filepath))

// jion拼接
const basePath = "/hello/file"
const filename = "abc.txt"

console.log(path.join(basePath,filename))
console.log(path.resolve(basePath,filename)) // resolve会查找根源路径
console.log(__filename)
console.log(__dirname)
console.log(path)