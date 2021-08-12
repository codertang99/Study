<template>
  <div>
    <!-- <my-input :model-value="title" @update:model-value="title = $event"></my-input> -->
    <my-input v-model="title" v-model:hy="message"></my-input>
    {{ title }}-{{ message }}
  </div>
</template>

<script>

import MyInput from "./MyInput.vue"

export default {
  components: {
    MyInput
  },
  data() {
    return {
      title: "hello",
      message: "coderwhy"
    }
  }
}
</script>

<style>

</style>