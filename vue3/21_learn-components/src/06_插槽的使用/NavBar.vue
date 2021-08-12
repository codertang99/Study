<template>
  <div class="root">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .root {
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .left, .right {
    width: 40px;
    background: chartreuse;
  }

  .center {
    flex: 1;
    background: chocolate;
  }

</style>