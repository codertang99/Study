<template>
  <div>
    content-detail-msg: {{ name }}-{{ age }}-{{ names.value }}
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "names"]
}
</script>

<style>

</style>