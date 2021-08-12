import { ref } from "vue"

export default {
  props: {
    type: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, context) {
    const name = ref("tang")

    return {
      name
    }
  },
  render() {
    return (
      <div>
        <h2>Home:{this.$attrs.age}</h2>
        <h2>type:{JSON.stringify(this.$props.type)}</h2>
        <h2>{ this.$props.type.name }-{this.$props.type.age}</h2>
        { this.$slots.default ? this.$slots.default(this.name) : (
          <div>
            我是默认的home插槽 
          </div>
        ) }
      </div>
    )
  }
}