import { createApp } from "vue"

import { math } from "./js/math"
import mul from "./ts/mul"
import App from "./vue/app.vue"

import "./css/body.css"
import "./css/title.less"

console.log(123132);
console.log(math(2, 4));
console.log(mul(3, 9));

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "Hello Vite";
document.body.appendChild(divEl)

createApp(App).mount("#app")

