<template>
  <div>
    <h2>Home</h2>
    <hr>
    <h2>{{ age }}</h2>
    <h2>{{ doubleAge }}</h2>
  </div>
</template>

<script>
import { nextTick } from "vue"
import { createNamespacedHelpers } from "vuex"

const { mapState, mapGetters } = createNamespacedHelpers("a")

export default {
  computed: {
    ...mapState(["age"]),
    ...mapGetters(["doubleAge"])
  }
}
</script>

<style>

</style>