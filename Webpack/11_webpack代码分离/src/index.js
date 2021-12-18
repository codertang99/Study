import _ from "lodash"

console.log(_.join(["!23", "234"], "11"));
console.log("hello");

const btn = document.createElement("button")
btn.innerText = "按钮"
document.body.appendChild(btn)

/**
 * 模拟spa 单击事件再导入加载, 异步导入
 * 但是这种方式再加载过程中, 都需要从浏览器下载js, 然后解析导入再执行代码
 */
btn.addEventListener("click", () => {
  /**
   * 魔法注释: magic comments
   * prefetch: 预获取 -> 闲置时间下载
   * preload: 预加载 -> 跟随父脚本同步加载
   */
  import(
    /* webpackChunkName: "elementName" */
    /* webpackPrefetch: true */
    "./element").then(({ default: element }) => {
    console.log(element);
    document.body.appendChild(element)
  })
})
