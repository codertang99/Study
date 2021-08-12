<template>
  <div>

  </div>
</template>

<script>

import { onMounted, onUpdated, onUnmounted } from "vue"

export default {
  setup() {

    onMounted(() => {
      console.log("app onMounted");
    })

    onUpdated(() => {
      console.log("app onUpdated");
    })

    onUnmounted(() => {
      console.log("app onUnmounted");
    })

    return {

    }
  }
}
</script>

<style>

</style>