<template>
  <h2>我是app模板</h2>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello"
    }
  }
}
</script>

<style scoped>
  h2 {
    color: red;
  }
  div {
    background: #444;
  }
</style>