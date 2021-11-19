console.log(outerHeight); // 浏览器外层高度
console.log(innerHeight); // 浏览器可见高度

console.log("screenX", screenX);
console.log("screenY", screenY);

window.addEventListener("scroll", function() {
  console.log(scrollX, scrollY);
})

const btn = document.querySelector(".btn")
btn.addEventListener("click", function() {
  // open("http://www.baidu.com")
  // scrollTo({
  //   top: 10000
  // })
  close()
})

// 还有常见的事件, 这是不做演示, 通常查看文档即可