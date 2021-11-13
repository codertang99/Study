const str = '{"name":"tang","age":20,"friends":{"name":"lucy"},"fruit":["ccc","aaaa"]}'

// 直接进行parse
const obj = JSON.parse(str)
console.log(obj);

// 在解析同时传入第二个参数, 函数, 用作对对象中每个元素进行变换操作
const obj2 = JSON.parse(str, (key, value) => {
  if(key === "age") return value + 230
  return value
})

console.log(obj2);