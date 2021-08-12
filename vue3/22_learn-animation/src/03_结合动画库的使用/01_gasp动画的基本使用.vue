<template>
  <div>
    <button @click="isShow = !isShow">toggle</button>
    <transition @enter="enter"
                @leave="leave"
                :css="false">
      <span v-if="isShow">Hello</span>
    </transition>
  </div>
</template>

<script>

import gsap from "gsap"

export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    enter(el, doen) {
      gsap.from(el, {
        opacity: 0,
        translateX: 100,
        onComplete: doen
      })
    },
    leave(el, doen) {
      gsap.to(el, {
        opacity: 0,
        translateX: 100,
        onComplete: doen
      })
    }
  }
}
</script>

<style>
  span {
    display: block;
  }
</style>