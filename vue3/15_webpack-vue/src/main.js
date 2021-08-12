import { createApp } from "vue/dist/vue.esm-bundler"

import { add } from "./js/math";
const { formatPrice } = require("./js/format");

import App from "./App.vue"

// 关系依赖, 图结构
import "./js/element"

console.log(add(10, 20));
console.log(formatPrice());

const app = createApp(App)

app.mount("#app")