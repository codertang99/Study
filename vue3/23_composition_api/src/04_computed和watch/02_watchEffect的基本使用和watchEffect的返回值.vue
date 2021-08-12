<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="change">change</button>
  </div>
</template>

<script>

import { computed, ref, watchEffect } from "vue"

export default {
  setup() {

    const name = ref("tang")
    const age = ref(20)

    const stop = watchEffect(() => {
      console.log("age:" + age.value, "name:" + name.value)
    })

    const change = () => {
      if(age.value++ > 30) {
        stop()
      }
    }

    return {
      name,
      age,
      change
    }
  }
}
</script>

<style>

</style>