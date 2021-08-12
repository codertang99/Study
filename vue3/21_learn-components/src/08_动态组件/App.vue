<template>
  <div>
    <button :class="{active: currentTab === item}" v-for="(item) in tab" :key="item" @click="changeTab(item)">{{ item }}</button>
    <keep-alive :include="['f2']" exclude="f1" max="10">
      <component :is="currentTab" name="Help" @pagePro="handleCpn"></component>
    </keep-alive>
  </div>
</template>

<script>

import F1 from "./components/f1.vue"
import F2 from "./components/f2.vue"
import F3 from "./components/f3.vue"

export default {
  components: {
    F1,
    F2,
    F3
  },
  data() {
    return {
      tab: ["f1", "f2" ,"f3"],
      currentTab: "f1"
    }
  },
  methods: {
    changeTab(value) {
      this.currentTab = value
    },
    handleCpn(value) {
      console.log(value)
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>