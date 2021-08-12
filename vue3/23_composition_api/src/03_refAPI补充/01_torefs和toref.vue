<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">change</button>
  </div>
</template>

<script>

import { reactive, toRef, toRefs } from "vue"

export default {
  setup() {

    const info = reactive({
      name: "tang",
      age: 19
    })
    /***
     * reactive对象中转化为ref对象 建立连接, 这样结构出来是响应式的
     */

    let { age } = toRefs(info)
    const name = toRef(info, "name")

    const changeAge = _ => {
      age.value++
    }

    return {
      name,
      age,
      changeAge
    }
  }
}
</script>

<style>

</style>