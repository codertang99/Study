import { ref, watch } from "vue"

export default function(key, value) {

  const name = ref(value)

  if(value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    name.value = JSON.parse(localStorage.getItem(key))
  }

  watch(name, (newValue) => {
    localStorage.setItem(key, name.value)
  })

  return {
    name
  }
}