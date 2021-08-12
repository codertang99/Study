<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">change</button>
  </div>
</template>

<script>

import { shallowRef, triggerRef, ref } from "vue"

export default {
  setup() {

    const info = shallowRef({name: "info"})
    const changeInfo = () => {
      info.value.name = "tang"
      console.log(info.value)
      triggerRef(info)
    }

    return {
      info,
      changeInfo
    }
  }
}
</script>

<style>

</style>