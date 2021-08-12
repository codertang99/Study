<template>
  <div>
    <button @click="innerBtn">inner</button>
  </div>
</template>

<script>

import emitter from "./utils/emitter.js"
import { INNER_EMITTER } from "./utils/constant"

export default {
  methods: {
    innerBtn() {
      console.log("innerbtn");
      emitter.emit(INNER_EMITTER, { name: "tang", age: 18 });
      emitter.emit("i", { hello: "hello" })
    }
  }
}
</script>

<style>

</style>