Vue.createApp({
  template: "#tang",
  data() {
    return {
      infos: [
        {
          name: "龙珠",
          time: "2020-1-2",
          price: "124",
          num: 1
        },
        {
          name: "龙珠2",
          time: "2020-1-3",
          price: "123",
          num: 1
        },
        {
          name: "龙珠3",
          time: "2020-1-4",
          price: "122",
          num: 1
        },
        {
          name: "龙珠4",
          time: "2020-1-5",
          price: "121",
          num: 1
        }
      ]
    }
  },
  methods: {
    increment(index) {
      this.infos[index].num++
    },
    decrement(index) {
      this.infos[index].num--
    },
    remove(index) {
      this.infos.splice(index, 1)
    }
  },
  computed: {
    total() {
      let total = 0
      this.infos.forEach(item => {
        total += item.num * item.price
      })
      return total
    }
  }
}).mount("#app")