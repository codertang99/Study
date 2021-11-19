// window它是相当于一个类的引用实例, 是通过new  Window()的方式创建出来的
// 而Window类又继承了一个叫做EventTarget的基类, 这是一种架构思想
// addEventListener removeEventListener dispatchEvent都来自EventTarget的基类

const fn = () => {
  console.log("hello EventTarget");
}

window.addEventListener("click", fn)

setTimeout(() => {
  window.removeEventListener("click", fn)
}, 5000);

// 这里还有一个dispatchEvent的方法, 可以派发自定义的事件, 有点类似于vue3中的mitt
window.addEventListener("tang", () => {
  console.log("hello tang");
})

// 这里需要dispatch派发一个自定义的Event对象
window.dispatchEvent(new Event("tang"))