<template>
  <div class="app">
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <h2>{{ name }}</h2>
    <button @click="change">change</button>
    <div class="scroll-fix">
      <h2>scrollX:{{ scrollX }}</h2>
      <h2>scrollY:{{ scrollY }}</h2>
    </div>
    <div class="mouse-fix">
      <h2>mouseX:{{ mouseX }}</h2>
      <h2>mouseY:{{ mouseY }}</h2>
    </div>
  </div>
</template>

<script>

import {
  useStorage,
  useScroll,
  useTitle,
  useCounter,
  useMouse
} from "./hooks"

export default {
  setup() {

    const { counter, increment, decrement } = useCounter()
    const { newTitle } = useTitle("Hello")
    const { scrollX, scrollY } = useScroll()

    // const { name } = useStorage("data", { name:"tang", age: 19 })

    const { name } = useStorage("data")
    const { mouseX, mouseY } = useMouse()

    const change = () => {
      name.value = "hhhh"
    }
    

    setTimeout(() => {
      newTitle.value = "newTitle"
    }, 200);

    return {
      counter,
      increment,
      decrement,
      newTitle,
      useScroll,
      scrollX,
      scrollY,
      name,
      change,
      mouseX,
      mouseY
    }
  }
}
</script>

<style>
  .scroll-fix {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  .app {
    width: 3000px;
    height: 3000px;
  }

  .mouse-fix {
    position: fixed;
    right: 100px;
    bottom: 100px;
  }
</style>