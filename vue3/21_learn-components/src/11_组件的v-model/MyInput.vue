<template>
  <div>
    <!-- <input type="text" :value="modelValue" @input="changeTitle"> -->
    <input type="text" v-model="values">
    <input type="text" v-model="hyValue">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String || Number
    },
    hy: {
      type: String || Number
    }
  },
  emits: ["update:modelValue", "update:hy"],
  methods: {
    changeTitle(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  },
  computed: {
    values: {
      set(value) {
        this.$emit("update:modelValue", value)
      },
      get() {
        return this.modelValue
      }
    },
    hyValue: {
      set(value) {
        this.$emit("update:hy", value)
      },
      get() {
        return this.hy
      }
    }
  }
}
</script>

<style>

</style>