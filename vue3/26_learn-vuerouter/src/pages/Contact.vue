<template>
  <div>
    <h2>Contact</h2>
    <p>my contact</p>
    <p>{{ $route.query.name }}-{{ $route.query.age }}</p>
  </div>
</template>

<script>

import { useRoute } from "vue-router"

export default {
  setup() {

    const route = useRoute()

    console.log(route.query)

    return{
    }
  }
}
</script>

<style>

</style>