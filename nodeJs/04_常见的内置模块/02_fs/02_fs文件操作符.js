const fs = require('fs');

fs.open("./info.txt",(err,fd) => {
  if(err) {
    return console.log("错误")
  }

  // console.log(fd)

  fs.readFile(fd,{encoding:"utf8"},(err,res) => {
    if(err) {
      return console.log("读取错误")
    }

    console.log(res)

  })


})