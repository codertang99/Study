<template>
  <div>
    <h2>{{ readMessage }}-{{ readMessage2 }}-{{ readMessage3 }}</h2>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue"

export default {
  setup() {

    const message = {
      name: "tang",
      age: 18
    }

    const message2 = reactive({
      name: "tang",
      age: 19
    })

    const message3 = ref("Hello World")

    // 返回一个只读对象, 不允许修改, 一般用于把readonly返回的值传递给子组件不被子组件修改
    const readMessage = readonly(message)
    const readMessage2 = readonly(message2)
    const readMessage3 = readonly(message3)
    
    const updateMessage = () => {
      message3.value = "Hello Hot"
    }

    return {
      readMessage,
      readMessage2,
      readMessage3,
      updateMessage
    }
  }
}
</script>

<style>

</style>