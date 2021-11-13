// 这是一个普通的对象
const obj = {
  name: "tang",
  age: 20,
  friends: {
    name: "lucy"
  },
  fruit: ["ccc", "aaaa"]
}

// 第一种方式
const str1 = JSON.stringify(obj)
console.log(str1);

// 第二种方式, 在对对象进行序列化解析式, 传入第二个参数数组, 放置需要过滤的key, 那么解析后将不包含过滤的
const str2 = JSON.stringify(obj, ["name", "fruit"])
console.log(str2);

// 第三种方式, 可以传入第二个参数, 函数, 一般用于在转换前对对象的value进行操作
const str3 = JSON.stringify(obj, (key, value) => {
  // 对name进行判断并修改
  if(key === "name") return value + " lucy"
  // 直接返回不做任何操作
  return value
})

console.log(str3);

// 第四种方式, stringify的第三个参数, 用作对格式化后的字符串进行美化, 直接传入数字代表空格数量, 也可以传入字符串代替
const str4 = JSON.stringify(obj, null, 2)
console.log(str4);