<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ counter.msg }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>

import { ref, reactive } from "vue"

export default {
  setup() {

    /***
     * 在ref中包裹的基本数据类型, template模板中会进行自动解包操作, 在setup中则需要通过.value的形式修改, 它是一个ref的引用对象
     * 把ref引用通过普通对象包裹不会进行解包, 在reactive对象对进行解包, 其实在源码中只是对对象做了一层判断
     */
    
    const msg = ref(100);

    const counter = reactive({
      msg
    })

    const increment = () => {
      msg.value++
      console.log(msg.value)
    }

    return {
      msg,
      increment,
      counter
    }
  }
}
</script>

<style>

</style>