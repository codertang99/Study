<template>
  <div>
    <h2 ref="titleRef">Hello World</h2>
    <button @click="change">change</button>
  </div>
</template>

<script>

import { computed, ref, watchEffect } from "vue"

export default {
  setup() {

    const name = ref("tang")
    const age = ref(19)
    const titleRef = ref(null)

    watchEffect((onInvalidate) => {
      console.log(titleRef.value, age.value, name.value)
      const timer = setTimeout(() => {
        console.log("2秒后执行操作")
      }, 2000);
      onInvalidate(() => {
        clearTimeout(timer)
      })
    }, {
      flush: "post"
    })

    const change = () => {
      age.value++
    }

    return {
      name,
      age,
      titleRef,
      change
    }
  }
}
</script>

<style>

</style>