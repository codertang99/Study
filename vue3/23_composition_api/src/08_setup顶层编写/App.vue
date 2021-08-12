<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
  </div>
</template>
<script setup>
  //  实验性特性
  import { ref, defineEmit, defineProps } from "vue"

  const name = ref("tang")
  const age = ref(19)

  const props = defineProps({
    name: {
      type: String,
      default: "Hello"
    }
  })

  console.log(props.name)

  const emit = defineEmit(["clickEmit"])

</script>            

<style>

</style>