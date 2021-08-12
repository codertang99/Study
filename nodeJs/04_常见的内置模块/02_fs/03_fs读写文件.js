const fs = require('fs');

fs.writeFile("./info.txt","您好呀！",{flag:"a+",encoding:"utf-8"},(err) => {
  console.log(err)
})

fs.readFile("./info.txt", {flag: "a+",encoding: "utf-8"}, (err,data) => {
  if(err) {
    return console.log("读取错误")
  }

  console.log(data)

})