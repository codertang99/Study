import axios from "axios";
// import math from "./math"

// const tang: string = "hello tang";

// console.log(math(20, 30));
// console.log(tang);

axios.get("/api/statistics").then(res => {
  console.log(res)
}).catch(res => {
  console.log(res)
})
const tang: string = "tang"
console.log(tang)
