import { add, mul } from "./js/math"

const { formatDate, formatStr } = require("./js/fun")

const add1 = add(20, 30)
const mul1 = mul(30, 40)

console.log(add1, mul1);
console.log(formatStr());
console.log(formatDate());
