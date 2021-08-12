<template>
  <div>
    contentDetialMsg
  </div>
</template>

<script>

import { INNER_EMITTER } from "./utils/constant"
import emitter from "./utils/emitter"

export default {
  created() {
    emitter.on(INNER_EMITTER, (val) => {
      console.log(val)
    })
    emitter.on("i", (value) => {
      console.log(value)
    })
    emitter.on("*", (type, value) => {
      console.log("*", type, value)
    })
  },
}
</script>

<style>

</style>