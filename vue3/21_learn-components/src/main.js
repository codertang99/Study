import { createApp } from 'vue'
import App from './10_生命周期函数/App.vue'

// import { sum } from "./utils/math"

// console.log(sum(1,2))

// webpack中的代码分包, 需要使用的时候再引入, 减轻首屏加载
import("./utils/math").then(res => {
  console.log(res.sum(1,2))
})

createApp(App).mount('#app')
