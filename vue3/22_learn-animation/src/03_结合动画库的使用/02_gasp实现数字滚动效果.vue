<template>
  <div>
    <input type="number" step="100" v-model="number">
    <div>{{ showNumber }}</div>
  </div>
</template>

<script>

import gsap from "gsap"

export default {
  data() {
    return {
      number: 0,
      showNumber: 0
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this, { duration: 1, showNumber: newValue })
    }
  }
}
</script>

<style>
  span {
    display: block;
  }
</style>