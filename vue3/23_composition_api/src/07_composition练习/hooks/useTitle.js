import { ref, watch } from "vue"

export default function(title = "默认的title") {

  const newTitle = ref(title)

  watch(newTitle, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  return {
    newTitle
  }
}