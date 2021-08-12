<template>
  <div>
    <home></home>
    app
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="change">change</button>
  </div>
</template>

<script>

import { provide, ref, readonly } from "vue"

import Home from "./Home.vue"

export default {
  components: {
    Home
  },
  setup() {

    const age = ref(19)
    const name = ref("tang")

    provide("name", readonly(name))
    provide("age", readonly(age))

    const change = () => {
      age.value++
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