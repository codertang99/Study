<template>
  <div>
    <h2>{{ message }}</h2>
    <h3>{{ name }} {{ age }}</h3>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const message = ref("hello tang123");
    const form = reactive({
      name: "tang",
      age: 20,
    });

    return {
      message,
      ...toRefs(form),
    };
  },
};
</script>
