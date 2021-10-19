/**
 * 以前js判断数组中是否存在某个元素都是通过indexOf来判断的
 * es7新增方法includes可以判断数组中是否包含元素
 */

const arr = ["!23", "123", "213", "12", NaN]

// 这相当于一种取巧的方法, 它不能够判断数组中存在NaN元素
if(arr.indexOf("12") !== -1) {
  console.log("存在此元素");
}

// 无法判断NaN
if(arr.indexOf(NaN) !== -1) {
  console.log("存在此元素");
}

// 直接调用includes方法返回boolean值, 可以判断NaN
if(arr.includes(NaN)) {
  console.log("存在");
}

// includes方法可以传递第二个参数, 表示数组从哪个元素开始找
if(arr.includes("12", 1)) {
  console.log("存在~~~");
}