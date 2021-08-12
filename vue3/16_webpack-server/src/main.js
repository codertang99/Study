import { createApp } from "vue/dist/vue.esm-bundler"
import axios from "axios"

import { add } from "./js/math";
const { formatPrice } = require("./js/format");

import App from "./App.vue"

// 关系依赖, 图结构
import "./js/element"

if(module.hot) {
  module.hot.accept("./js/element", () => {
    console.log("模块更新了");
  })
}
// HMR 模块热替换

console.log(add(10, 20));
console.log(formatPrice());

const app = createApp(App)

app.mount("#app")

axios.get("/api/banner").then(res => {
  console.log(res);
}, err => {
  console.log(err);
})