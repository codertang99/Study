import { createApp } from 'vue'
import App from './04_teleport/App.vue'
import registryDirectives from './direactives'
import pluginObject from "./plugins/plugin_object"
import pluginFun from "./plugins/plugin_fun"

const app = createApp(App)

app.use(pluginObject)
app.use(pluginFun)

registryDirectives(app);

// app.directive("focus", (el) => {
//   el.focus()
// })

app.mount('#app')
