<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <counter-opration @add="inc" @sub="dec" @subN="incN"></counter-opration>
  </div>
</template>

<script>

import CounterOpration from "./CounterOpration.vue"

export default {
  components: {
    CounterOpration
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    inc() {
      this.counter++
    },
    dec() {
      this.counter--
    },
    incN(payload) {
      this.counter +=payload
    }
  }
}
</script>

<style>

</style>