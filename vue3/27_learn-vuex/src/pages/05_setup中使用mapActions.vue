<template>
  <div>
    <h2>Home</h2>
    <hr>
    <h2>{{ state }}</h2>
    <button @click="delayIncre">change</button>
    <button @click="requestAction">request</button>
  </div>
</template>

<script>

import { computed } from "vue"
import { useStore, mapActions } from "vuex"

export default {
  methods: {
    // change() {
    //   this.$store.dispatch("delayIncre", { name: "tang", age: 19 })
    // }
    // ...mapActions(["delayIncre"])
  },
  setup() {

    const store = useStore()
    const state = computed(() => store.state.counter)
    const requestAction = () => {
      store.dispatch("requestAction", {name: "tangsetup"}).then(res => {
        console.log(res)
      })
    }

    return {
      state,
      ...mapActions(["delayIncre"]),
      requestAction
    }
  }
}
</script>

<style>

</style>