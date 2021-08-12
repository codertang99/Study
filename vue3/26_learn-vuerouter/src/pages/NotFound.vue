<template>
  <div>
    <h2>Not Found</h2>
    <h2>Please Contact</h2>
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

    console.log(route)

    return {
    }
  }
}
</script>

<style>

</style>