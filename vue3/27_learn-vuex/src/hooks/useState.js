import { mapState, createNamespacedHelpers } from "vuex"
import useMapper from "./useMapper"

export default function useState(mapper, moduleName) {

  let mapName = mapState;

  if(typeof moduleName === "string" && moduleName.length > 0) {
    mapName = createNamespacedHelpers(moduleName).mapState
  }

  return useMapper(mapName, mapper)
}