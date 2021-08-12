<template>
  <div>
    <h2>Home</h2>
    <hr>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.state.a.age }}</h2>
    <h2>{{ $store.state.b.age }}</h2>
    <h2>{{ doubleAge }}</h2>
    <button @click="incre">change</button>
  </div>
</template>

<script>

import { mapMutations, mapState, mapGetters, useStore } from "vuex"

export default {
  methods: {
    // ...mapMutations(["a/incre"])
  },
  setup() {

    const store = useStore()

    const mutations = mapMutations({
      incre: "a/incre"
    })

    const doubleAge = store.getters["a/doubleAge"]

    return {
      ...mutations,
      doubleAge
    }
  }
}
</script>

<style>

</style>