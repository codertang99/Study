const fs = require('fs');
const path = require('path');

const dirname = "./tang"

// if(!fs.existsSync(dirname)) {
//   fs.mkdir(dirname, (err) => {
//     console.log(err)
//   })
// }


// fs.readdir(dirname,(err,files) => {
//   if(err) {
//     return console.log("错误")
//   }
//   console.log(files)
// })

// fs.rename(dirname, "./tang", () => {
//   console.log("成功")
// })

const dirFolders = (dirname) => {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach(res => {
      if(res.isDirectory()) {
        const newFolders = path.resolve(dirname, res.name)
        dirFolders(newFolders)
      } else {
        console.log(res.name)
      }
    })
  })
}

dirFolders(dirname)