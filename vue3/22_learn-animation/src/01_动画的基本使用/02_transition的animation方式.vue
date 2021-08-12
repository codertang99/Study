<template>
  <div>
    <button style="display: block;" @click="isShow = !isShow">toggle</button>
    <transition name="tang">
      <div class="div" v-if="isShow">
        transition-animation 
      </div>
    </transition>
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

  .div {
    display: inline-block;
    width: 300px;
    height: 300px;
  }

  .tang-enter-from,
  .tang-leave-to {
    opacity: 0;
  }

  .tang-enter-to,
  .tang-leave-from {
    opacity: 1;
  }

  .tang-enter-active {
    animation: bounce 2s ease;
    transition: all 2s;
  }

  .tang-leave-active {
    animation: bounce 2s ease reverse;
    transition: all 2s;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }
</style>