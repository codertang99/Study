<script>

import { h } from "vue"

export default {
  setup(props, context) {

    const { slots, attrs, emit } = context

    return () => h("div", { class: "app" }, [
      h("h2", null, "inner content"),
      slots.default ? slots.default() : h("h2", null, "我是默认的slots插槽")
    ])
  }
}
</script>

<style>

</style>