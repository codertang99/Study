<template>
  <div>
    <content :names="names">
      <template v-slot:default="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template>
    </content>

    <content :names="names">
      <template #default="slotProps">
        <strong>{{ slotProps.item }}-{{ slotProps.index }}</strong>
      </template>
    </content>
  </div>
</template>

<script>

import Content from "./Content.vue"

export default {
  data() {
    return {
      names: ["abc", "cbd", "ads", "ads", "Adfa"]
    }
  },
  components: {
    Content
  }
}
</script>

<style>

</style>