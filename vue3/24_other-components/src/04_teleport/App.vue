<template>
  <div>
    <teleport to="#tang">
      <h2>teleports</h2>
      <p>Hello Vue</p>
    </teleport>
    <h2 v-ccc>{{ name }}</h2>
  </div>
</template>

<script>

import { getCurrentInstance } from "vue"

export default {
  data() {
    return {
      name: this.$name
    }
  },
  setup() {

    const instance = getCurrentInstance()

    const $sname = instance.appContext.config.globalProperties.$name

    console.log(instance.appContext.config.globalProperties.$name)

    return {
      $name 
    }
  }
}
</script>

<style>

</style>