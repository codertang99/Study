const http = require("http");


// http.get("http://localhost:3000",(res) => {

//   res.on("data", (data) => {
//     console.log(data.toString())
//   })

// })

const req = http.request({
  host:"localhost",
  port:"3000",
  method:"GET"
}, (res) => {
  res.on("data", (data) => {
    console.log(data.toString())
  })

  res.on("end", () => {
    console.log("请求发送成功")
  })
})

req.end()

