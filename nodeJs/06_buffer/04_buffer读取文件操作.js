const fs = require('fs');

fs.readFile("./ba.txt",(err, data) => {
  console.log(data.toString())

  fs.writeFile("./baa.txt", data, (data) => {
    console.log(data)
  })

})