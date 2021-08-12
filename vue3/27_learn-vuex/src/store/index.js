import { createStore } from "vuex";

import { DECREMENT_N } from "./mustations-types"
import A from "./module/a"
import B from "./module/b"

const store = createStore({
  state() {
    return {
      counter: 0,
      name: "tang",
      age: 19,
      height: 1.99
    }
  },
  getters: {
    sName(state, getters) {
      return `name: ${state.name}`
    },
    sAge(state, getters) {
      return `age: ${state.age}`
    },
    sHeight(state, getters) {
      return `height: ${state.height}`
    }
  },
  mutations: {
    incre(state, payload) {
      state.counter++
    },
    decre(state, payload) {
      state.counter--
    },
    increN(state, payload) {
      state.counter += payload
    },
    [DECREMENT_N](state, payload) {
      state.counter -= payload.n
    }
  },
  actions: {
    delayIncre(context, payload) {
      console.log(context, payload);
      setTimeout(() => {
        context.commit("incre")
      }, 2000);
    },
    requestAction(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(payload);
          resolve({name: "tang"})
        }, 2000);
      })
    }
  },
  modules: {
    a: A,
    b: B
  }
});

export default store;