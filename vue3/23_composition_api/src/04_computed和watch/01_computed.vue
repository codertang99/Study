<template>
  <div>
    <h2>{{ name }}-{{ name2 }}</h2>
    <h2>{{ info }}</h2>
    <button @click="change">change</button>
  </div>
</template>

<script>

import { computed, ref } from "vue"

export default {
  setup() {

    const name = ref("tang")
    const name2 = ref("coder")

    const info = computed(() => name.value + " "+ name2.value)
    const info2 = computed({
      get: () => {
        return name.value + " " + name2.value
      },
      set: (newValue) => {
        const names = newValue.split(" ")
        name.value = names[0]
        name2.value = names[1]
      }
    })

    const change = _ => {
      info2.value = "coder why";
    }

    return {
      name,
      name2,
      info,
      change
    }
  }
}
</script>

<style>

</style>