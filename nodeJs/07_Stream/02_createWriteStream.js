const fs = require('fs');

const write = fs.createWriteStream("./index.txt",{
  flags: "a",
  start:1 
})

write.write("abc", () => {
  console.log("写入成功")
})

write.end("ends")

// write.close()

write.on("close", () => {
  console.log("close事件")
})

write.on("finish", () => {
  console.log("文件写入完成")
})