export default {
  namespaced: true,
  state() {
    return {
      age: 20
    }
  },
  getters: {
    doubleAge(state, getters, rootState, rootGetters) {
      return state.age * 100
    }
  },
  mutations: {
    incre(state, payload) {
      state.age++
    }
  },
  actions: {
    timeAction({ commit, state, rootState, dispatch, getters, rootGetters }, payload) {
      commit("", null, {root: true})
      dispatch("", null, {root: true})
    }
  }
}