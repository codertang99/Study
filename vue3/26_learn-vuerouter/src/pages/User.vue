<template>
  <div>
    <h2>User: {{ $route.params.id }}</h2>
    <router-link to="/user/123/info">Info</router-link>
    <router-link to="/user/123/shops">Shops</router-link>
    <router-view/>
  </div>
</template>

<script>

import { useRoute } from "vue-router"

export default {
  setup() {
    const route = useRoute()
    console.log(route.params.id)
    return {
    }
  }
}
</script>

<style>

</style>