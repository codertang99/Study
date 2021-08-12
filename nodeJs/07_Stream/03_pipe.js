const fs = require('fs');

fs.readFile("./index.txt", (err,data) => {
  if(err) {
    return 
  }

  fs.writeFile("./indez.txt", data, () => {
    console.log("成功");
  })

})

const read = fs.createReadStream("./index.txt");
const write = fs.createWriteStream("./indez.txt");
// read.on("data", (data) => {
//   write.write(data, () => {
//     console.log("写入成功");
//   })
// })

read.pipe(write)

write.close()