<template>
  <div>
    <h2 :class="$attrs.class">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // props: ["title", "content"]
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    content: {
      type: String,
      default: ""
    }
  },
  inheritAttrs: false  // 禁止继承attrs
}
</script>

<style>

</style>