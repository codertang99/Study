<template>
  <div>
    <template v-for="(item,index) in names" :key="index">
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>