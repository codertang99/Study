import { add } from "./js/math";
const { formatPrice } = require("./js/format");

// 关系依赖, 图结构
import "./js/element"

console.log(add(10, 20));
console.log(formatPrice());