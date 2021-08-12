<template>
  <div>
    <h2>about</h2>
    <p>{{ $route }}</p>
  </div>
</template>

<script>

import { useRoute } from "vue-router"

export default {
  created() {
    console.log(this.$route)
  },
  setup() {
    const route = useRoute()
    console.log(route.meta)
    console.log(route.name)
  }
}
</script>

<style>

</style>