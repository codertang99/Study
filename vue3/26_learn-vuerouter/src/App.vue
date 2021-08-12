<template>
  <div>
    <router-link to="/home" active-class="tang-active">首页</router-link>
    <router-link to="/about" active-class="tang-active">关于</router-link>
    <router-link to="/user/123" active-class="tang-active">用户</router-link>
    <button @click="toContact">Contact</button>
    <router-view v-slot="{ Component }">
      <transition name="tang">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <h2>哈哈哈</h2>

    <router-link to="/about" v-slot="{ href, navigate, route, isActive, isExactActive }" custom>
      <p>{{href}}</p>
      <button @click="navigate">go</button>
      <div>{{ route }}</div>
      <div>{{ isActive }}-{{ isExactActive }}</div>
    </router-link>
  </div>
</template>

<script>

import { useRouter } from "vue-router"

export default {
  setup() {

    const router = useRouter()

    const toContact = () => {
      router.push({
        path: "/contact",
        query: {
          name:"tang",
          age: 19
        }
      })
    }

    return {
      toContact
    }
  }
}
</script>

<style>
  .tang-active {
    color: red;
    font-weight: bold;
  }
  .tang-leave-to {
    opacity: 0;
  }
  .tang-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }

  .tang-enter-active,
  .tang-leave-active {
    transition: all .9s ease;
  }

</style>