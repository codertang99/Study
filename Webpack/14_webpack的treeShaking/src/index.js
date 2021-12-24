import { add } from "./math"
import "./uncs"
import "./css/style.css"

console.log("hello")
console.log(add(10, 20));

const h2El = document.createElement("h2")
h2El.innerHTML = "hello"
document.body.appendChild(h2El)

const divEl = document.createElement("div")
divEl.className = "content"
document.body.appendChild(divEl)