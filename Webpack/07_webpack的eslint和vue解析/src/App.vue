<template>
  <div id="root">
    <div>{{data}}</div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {

    const data = ref("hello tang")

    return {
      data
    }
  }
};
</script>
