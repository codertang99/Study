// import dayjs from "dayjs"
// import axios from "axios"
import "./style.css"

axios.get("http://httpbin.org/get").then(res => {
  console.log(res);
})

console.log(dayjs().format());
console.log("hello world")