<template>
  <div>
    <transition name="tang">
      <div v-if="isShow">Hello World</div>
    </transition>
    <button @click="isShow = !isShow">切换</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style>
  .tang-enter-from,
  .tang-leave-to {
    opacity: 0;
  }

  .tang-enter-to,
  .tang-leave-from {
    opacity: 1;
  }

  .tang-enter-active,
  .tang-leave-active {
    transition: opacity 1s ease;
  }
</style>
