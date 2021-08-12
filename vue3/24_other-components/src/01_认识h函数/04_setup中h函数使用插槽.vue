<script>
import { h } from "vue"

import Content from "./Content.vue"

export default {
  setup() {
    return () => h("div", null, [
      h(Content, null, {
        default: props => h("span", null, "hello content")
      })
    ])
  }
}
</script>

<style>

</style>