import { computed } from "vue"
import { useStore } from "vuex"

export default function useMapper(mapName, mapper) {
  const store = useStore()

  const storeStateFns = mapName(mapper)

  const storeState = {}

  Object.keys(storeStateFns).forEach(keys => {
    storeState[keys] = computed(storeStateFns[keys].bind({$store: store}))
  })

  return storeState

}