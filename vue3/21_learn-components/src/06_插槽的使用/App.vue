<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <button>left</button>
      </template>
      <template #center>
        <div>我是中间的内容</div>
      </template>
      <template v-slot:right>
        daslkj
      </template>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "./NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>