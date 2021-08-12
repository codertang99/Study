<template>
  <div>
    {{message}}
    <button @click="message = 'ning'">修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  beforeCreate() {
    console.log("content beforeCreated")
  },
  created() {
    console.log("content created")
  },
  beforeMount() {
    console.log("content beforeMount")
  },
  mounted() {
    console.log("content mounted")
  },
  beforeUpdate() {
    console.log("content beforeUpdate")
  },
  updated() {
    console.log("content updated")
  },
  beforeUnmount() {
    console.log("content beforeUnmount")
  },
  unmounted() {
    console.log("content unmounted")
  }
  
}
</script>

<style>

</style>