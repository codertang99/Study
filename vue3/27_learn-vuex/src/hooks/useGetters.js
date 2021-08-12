import { mapGetters, createNamespacedHelpers } from "vuex"
import useMapper from "./useMapper"

export default function useGetters(mapper, moduleName) {

  let mapName = mapGetters

  if(typeof moduleName === "string" && moduleName.length > 0) {
    mapName = createNamespacedHelpers(moduleName).mapGetters
  }

  return useMapper(mapName, mapper)
}