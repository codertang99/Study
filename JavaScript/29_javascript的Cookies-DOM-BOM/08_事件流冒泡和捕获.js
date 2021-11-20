const divEl = document.querySelector(".box")
const spanEl = document.querySelector(".span")

// 当一堆元素都被叠加在一起, 并且都添加了对应事件, 那么对同一叠加元素事件触发会有一个事件流的规则

// 正常来说, 默认的addevent都是从里层向外层传递的
divEl.addEventListener("click", () => {
  console.log("divEl被点击了");
})

divEl.addEventListener("click", () => {
  console.log("divEl被点击了");
})

spanEl.addEventListener("click", () => {
  console.log("spanEl被点击了");
})

document.body.addEventListener("click", () => {
  console.log("body被点击了");
})

// 当传入第三个参数, 为true时, 表示先从外层捕获, 会有这么一个事件流的过程

divEl.addEventListener("click", () => {
  console.log("divEl: true被点击了");
}, true)

divEl.addEventListener("click", () => {
  console.log("divEl: true被点击了");
}, true)

spanEl.addEventListener("click", () => {
  console.log("spanEl: true被点击了");
}, true)


document.body.addEventListener("click", (event) => {
  // 这里有一个事件对象方法, 可以阻止冒泡和捕获
  // event.stopPropagation()
  event.stopImmediatePropagation() // 如果绑定多个会通知同级别阻止触发
  console.log("body: true被点击了");
}, true)


document.body.addEventListener("click", (event) => {
  console.log("event");
}, true)

