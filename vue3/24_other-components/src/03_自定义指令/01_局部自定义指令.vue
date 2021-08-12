<template>
  <div>
    <input v-focus.abc="'tang'" type="text">
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el, bindings, vnode, prenode) {
        console.log(el, bindings, vnode, prenode)
      }
    }
  }
}
</script>

<style>

</style>