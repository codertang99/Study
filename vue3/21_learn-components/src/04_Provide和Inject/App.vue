<template>
  <content></content>
  <button @click="addLength">+length</button>
</template>

<script>

import Content from "./Content.vue"
import { computed } from "vue"

export default {
  components: {
    Content
  },
  provide() {
    return {
      name: "tang",
      age: 18,
      //names: this.names.length  // 这中情况下, 引用data中的数据是不回进行响应式变化的
      names: computed(() => this.names.length)  // 这里用vue的一个computed函数, 返回一个ref的对象, 帮助我们处理响应式数据变化
    }
  },
  data() {
    return {
      names: ["abc", "cbd", "add"]
    }
  },
  methods: {
    addLength() {
      console.log(this.names)
      this.names.push("coderwhy")
    }
  }
}
</script>

<style>

</style>