<template>
  <show-message class="why" title="哈哈哈" content="呵呵呵"></show-message>
  <show-message title="呵呵呵" content="您好呀"></show-message>
  <show-message :title="title" :content="content"></show-message>
  <show-message :="message"></show-message>
</template>

<script>

import ShowMessage from "./ShowMessage.vue"

export default {
  data() {
    return {
      title: "大家好",
      content: "hello",
      message: {
        title: "title",
        content: "content"
      }
    }
  },
  components: {
    ShowMessage
  }
}
</script>

<style>

</style>