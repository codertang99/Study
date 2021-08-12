<template>
  <div>
    <suspense>
      <template v-slot:default>
        <content></content>
      </template>
      <template #fallback>
        <loading />
      </template>
    </suspense>
  </div>
</template>

<script>

import { defineAsyncComponent } from "vue"

import Content from "./Content.vue"
import Loading from "./Loading.vue"
import Error from "./Error.vue"

// 异步组件的两种写法: 工厂函数、 对象配置
// const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))
const AsyncHome = defineAsyncComponent({
  loader: () => import("./AsyncHome.vue"),
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 2000,
  suspensible: true,
  /***
   * err 错误信息
   * retry 函数, 调用尝试重新加载
   * fail 函数， 调用失败处理
   * attempts 尝试次数
   */
  onError:  (err, retry, fail, attempts) => {
    console.log(err, attempts)
  }
})

export default {
  components: {
    Content,
    AsyncHome,
    Loading
  }
}
</script>

<style>

</style>