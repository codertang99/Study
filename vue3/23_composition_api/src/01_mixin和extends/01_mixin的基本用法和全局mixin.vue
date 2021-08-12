<template>
  <div>
    App.vue
    <h2>{{ msg }}</h2>
    <h2>{{ app }}</h2>
  </div>
</template>

<script>

import Hello from "../mixins/hello"

export default {
  mixins: [Hello]
}
</script>

<style>

</style>