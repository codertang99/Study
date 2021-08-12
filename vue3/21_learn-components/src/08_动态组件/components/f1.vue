<template>
  <div @click="divClick">
    我是f1 {{ name }}
  </div>
</template>

<script>
export default {
  name: "f1",
  props: {
    name: String
  },
  emits: ["pagePro"],
  methods: {
    divClick() {
      console.log("我是f1组件")
      this.$emit("pagePro", { name: "f1" })
    }
  }

}
</script>

<style>

</style>