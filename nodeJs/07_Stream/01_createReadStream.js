const fs = require('fs');

const read = fs.createReadStream("./index.txt", {
  start: 3,
  end: 6,
  highWaterMark: 2
})

read.on("data", data => {
  console.log(data);
})

read.on("open", () => {
  console.log("开始读取文件");
})

read.on("close", () => {
  console.log("结束读取文件");
})