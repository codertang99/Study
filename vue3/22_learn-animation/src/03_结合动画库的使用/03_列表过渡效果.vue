<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shirfNum">洗牌</button>
    <transition-group tag="p" name="tang">
      <span v-for="(item) in numbers" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>

import _ from "lodash"

export default {
  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9],
      num: 10
    }
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomNum(), 0, this.num++)
    },
    removeNum() {
      this.numbers.splice(this.randomNum(), 1)
    },
    randomNum() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    shirfNum() {
      this.numbers = _.shuffle(this.numbers)
    }
  }
}
</script>

<style>
  span {
    display: inline-block;
    margin-right: 20px;
  }

  .tang-enter-from,
  .tang-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .tang-enter-active,
  .tang-leave-active {
    transition: all 2s ease;
  }

  .tang-leave-active {
    position: absolute;
  }

  .tang-move {
    transition: transform 2s ease;
  }

</style>