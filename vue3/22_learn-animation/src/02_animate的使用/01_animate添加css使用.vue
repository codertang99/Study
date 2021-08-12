<template>
  <div>
    <button @click="ishow = !ishow">togger</button>
    <transition enter-active-class="animate__animated animate__shakeX" leave-active-class="animate__animated animate__backInDown">
      <div v-if="ishow">hello</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ishow: false
    }
  }
}
</script>

<style>

</style>