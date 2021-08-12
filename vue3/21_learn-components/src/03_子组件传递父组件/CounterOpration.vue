<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num">
    <button @click="increN">+n</button>
  </div>
</template>

<script>
export default {
  // emits: ["add", "sub"],
  // 对象写法的目的是为了参数的验证
  emits: {
    add: null,
    sub: null,
    subN: (payload) => {
      console.log(payload)
      return true
    }
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increment() {
      console.log("+1")
      this.$emit("add")
    },
    decrement() {
      console.log("-1")
      this.$emit("sub")
    },
    increN() {
      console.log("+n")
      this.$emit("subN", this.num)
    }
  }
}
</script>

<style>

</style>