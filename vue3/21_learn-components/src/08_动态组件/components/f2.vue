<template>
  <div>
    我是f2 <button @click="btnClick">{{ num }}</button>
  </div>
</template>

<script>
export default {
  name: "f2",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    btnClick() {
      this.num++
    }
  }
}
</script>

<style>

</style>