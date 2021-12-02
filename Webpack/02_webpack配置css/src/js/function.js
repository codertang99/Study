// 需要配置对应loader加载源码转换, css-loader, style-loader
import "../css/component.css"
// 需要配置loader, less-loader, less
import "../css/component.less"

/**
 * 返回dom节点
 * @returns {HTMLDivElement|*}
 */
function component() {
  const div = document.createElement("div")

  div.classList.add("content")
  div.innerHTML = "hello content"

  return div

}

document.body.appendChild(component())