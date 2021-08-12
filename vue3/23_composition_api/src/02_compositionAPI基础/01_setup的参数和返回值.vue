<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ state.num }}</h2>
    <button @click="increment">增加</button>
  </div>
</template>

<script>

import { reactive } from "vue"

export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  /***
   * props: 传递的props
   * context: attrs、slots、emit
   */
  setup(props, context) {

    const state = reactive({
      num: 100
    })

    const increment = () => {
      state.num++
      console.log(state.num)
    }

    return {
      title: "Hello ",
      state,
      increment
    }
  }
}
</script>

<style>

</style>