<template>
  <div>
    <content v-if="index == 0"></content>
    <span @click="index = 2">CoderWhy</span>
  </div>
</template>

<script>
import Content from "./Content.vue"
export default {
  components: {
    Content
  },
  data() {
    return {
      index: 0
    }
  }
}
</script>

<style>

</style>