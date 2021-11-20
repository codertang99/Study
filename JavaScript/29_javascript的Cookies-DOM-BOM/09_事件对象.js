const spanEl = document.querySelector(".span")
const divEl = document.querySelector(".box")

const a = document.querySelector("a")

// spanEl.addEventListener("click", function(e) {
//   console.log(e);
//   console.log("target和currtTarget", e.target, e.currentTarget);
// })


divEl.addEventListener("click", function(e) {
  console.log(e);
  console.log(e.type);
  // target表示当前触发的事件对象, current则时绑定事件的对象
  console.log("target和currtTarget", e.target, e.currentTarget);
  console.log("鼠标点击的方位", e.offsetX, e.offsetY);
})

a.addEventListener("click", function(e) {
  // 阻止浏览器的某些默认行为
  e.preventDefault()
  console.log("hello");
})
