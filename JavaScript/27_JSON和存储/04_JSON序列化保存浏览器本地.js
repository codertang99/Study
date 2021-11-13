// 这是一个普通的对象
const obj = {
  name: "tang",
  age: 20,
  friends: {
    name: "lucy"
  },
  fruit: ["ccc", "aaaa"]
}

// 通过这样来保存至浏览器本地中, 虽然也是转换成字符串, 但是转换的是obj的字符串 [object Object] 这样的形式
window.localStorage.setItem("obj", obj)

// 可以通过json的stringify方法, 对对象进行序列号操作, 转换成格式字符串
const stringi = JSON.stringify(obj)
console.log(stringi);
window.localStorage.setItem("obj", stringi)

// 获取的是json序列号后的字符串
const str = window.localStorage.getItem("obj")
console.log(str);

// 通过json的parse方法, 对格式字符串进行解析, 解析成对象
const newObj = JSON.parse(str)

console.log(newObj);