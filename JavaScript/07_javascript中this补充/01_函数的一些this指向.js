// JavaScript中定时器函数, 内部是通过直接调用方式绑定window
setTimeout(function() {
  console.log(this);  // window
}, 2000)


var btn = document.querySelector("div")
btn.onclick = function() {
  console.log(this);  // btn本身
  // 实际上这里是默认调用通过, btn.onclick()这样去执行该函数, 所以this指向btn本身
}

btn.addEventListener("click", function() {
  console.log(this);
})

btn.addEventListener("click", function() {
  console.log(this);
})

btn.addEventListener("click", function() {
  console.log(this);
})
// 以上this均为btn本身, addEventListener和直接添加属性的方式都可以绑定事件, add方式可以看作统一收集起来调用

// forEach/ find/ map等方式, 类似这些数组函数都可以显示传入第二个参数显示绑定this
var arr = ["a", "c", "d"]

arr.forEach(function() {
  console.log(this);
}, "aa")  // 可以显示的传入第二个参数传入this

var mapArr = arr.map(function(item, index, arr) {
  console.log(this);
  return item + "0"
}, "Ccc")
console.log(mapArr);