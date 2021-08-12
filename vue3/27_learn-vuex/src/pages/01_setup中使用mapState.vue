<template>
  <div>
    <h2>Home</h2>
    <p>{{ show }}</p>
    <p>{{ $store.state.counter }}</p>
    <!-- <p>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</p> -->
    <p>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</p>
  </div>
</template>

<script>
import { computed } from "vue"
import { mapState, useStore } from "vuex"
export default {
  computed: {
    show() {
      return "Hello Home"
    },
    // ...mapState(["counter", "name", "age", "height"])
  },
  setup() {
    const store = useStore()

    const stateFns = mapState(["counter", "name", "age", "height"]);

    const state = {}
    Object.keys(stateFns).forEach(keys => {
      state[keys] = computed(stateFns[keys].bind({$store: store}))
    })

    return {
      // name: computed(() => store.state.name)
      ...state
    }
  }
}
</script>

<style>

</style>