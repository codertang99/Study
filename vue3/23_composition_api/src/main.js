import { createApp } from 'vue'
import App from './08_setup顶层编写/App.vue'

const app = createApp(App)

app.mixin({
  data() {
    return {
      app: "App Mixin"
    }
  },
  created() {
    console.log("mainjs mixin")
  }
})

app.mount('#app')

