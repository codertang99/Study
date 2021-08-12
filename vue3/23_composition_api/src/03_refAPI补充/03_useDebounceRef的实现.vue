<template>
  <div>
    <input type="text" v-model="info">
    <h2>{{ info }}</h2>
  </div>
</template>

<script>

import useDebounceRef from "./hooks/useDebounce"

export default {
  setup() {

    const info = useDebounceRef("Hello World")

    return {
      info
    }
  }
}
</script>

<style>

</style>