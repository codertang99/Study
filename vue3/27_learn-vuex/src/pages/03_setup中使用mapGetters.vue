<template>
  <div>
    <h2>Home</h2>
    <hr>
    <p>{{ $store.getters.sName }}-{{ $store.getters.sAge }}-{{ $store.getters.sHeight }}</p>
    <p>{{ sName }}-{{ sAge }}-{{ sHeight }}</p>
  </div>
</template>

<script>

import useGetters from "../hooks/useGetters"

export default {
  computed: {
    // ...mapGetters(["sName", "sAge"]),
    // ...mapGetters({
    //   sHeight: "sHeight"
    // })
  },
  setup() {

    const getters = useGetters(["sName", "sAge", "sHeight"])

    return {
      ...getters
    }
  }
}
</script>

<style>

</style>