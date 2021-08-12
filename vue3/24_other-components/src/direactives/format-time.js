import dayjs from "dayjs"
export default function(app) {

  let mat = "YYYY-MM-DD HH:mm:ss"

  app.directive("format-time", {
    created(el, bindings) {
      console.log(bindings);
      if(bindings.value)
        mat = bindings.value
    },
    mounted(el, bindings, vnode, prenode) {
      const textContent = el.textContent
      let timestap = parseInt(textContent)

      if(textContent.length === 10) {
        timestap = timestap * 1000
      }

      el.textContent = dayjs(timestap).format(mat)
    }
  })
}