<template>
  <div>
    <h2>{{ info.name }}-{{ info.age }}</h2>
    <button @click="change">change</button>
  </div>
</template>

<script>

import { watch, reactive, ref } from "vue"

export default {
  setup() {

    const info = reactive({
      name: "tang",
      age: 19
    })

    //  参数一: get函数返回响应式对象、 reactive、ref响应式数据
    watch(() => ({...info}), (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    const change = () => {
      info.age++
    }

    return {
      info,
      change
    }
  }
}
</script>

<style>

</style>