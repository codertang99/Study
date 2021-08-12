<template>
  <div>
    home
    <h2>{{ name }}-{{ age }}</h2>
  </div>
</template>

<script>

import { inject } from "vue"

export default {
  setup() {

    const name = inject("name", "")
    const age = inject("age")

    return {
      name,
      age
    }
  }
}
</script>

<style>

</style>