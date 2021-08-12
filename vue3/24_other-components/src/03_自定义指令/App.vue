<template>
  <div>
    <h2 v-format-time>{{ timestap }}</h2>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {

    const timestap = ref("1625298937");

    return {
      timestap
    }
  }
}
</script>

<style>

</style>