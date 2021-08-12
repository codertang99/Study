import { ref } from "vue"

import Home from "./Home"

export default {
  setup() {

    const counter = ref(0)
    const increment = () => counter.value++
    const decrement = () => counter.value--

    return {
      counter,
      increment,
      decrement
    }
  },
  render() {
    return (
      <div>
        <h2>{ this.counter }</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <hr />
        <Home age={19} type={{name: "coderwhy", age: 99}}>
          {{ default: (props) => <h2>我是传入的插槽:{props}</h2> }}
        </Home>
      </div>
    )
  }
}