<template>
  <div>
    <h2>Home</h2>
    <h2>{{ counter }}</h2>
    <hr>
    <button @click="incre">+1</button>
    <button @click="decre">-1</button>
    <button @click="increN(10)">+n</button>
    <button @click="decrement_n({ n: 10 })">-n</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

import { useState } from "../hooks/index"
import { DECREMENT_N } from "../store/mustations-types"

export default {
  methods: {
    // increment() {
    //   this.$store.commit("incre")
    // },
    // decrement() {
    //   this.$store.commit("decre")
    // },
    // ...mapMutations(["increN", DECREMENT_N])
  },
  setup() {
    const state = useState(["counter"])
    const mustaions = mapMutations(["incre", "decre", "increN", DECREMENT_N])

    return {
      ...state,
      ...mustaions
    }
  }
}
</script>

<style>

</style>