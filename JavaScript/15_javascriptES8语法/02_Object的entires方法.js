const obj = {
  name: "tang",
  height: 1.99
}

// 获取对象数组等entries数组结构
console.log(Object.entries(obj));

const entriesArr = Object.entries(obj)

// 可以对entries结构数组进行遍历
entriesArr.forEach(function([key, value]) {
  console.log(key, value);
})

// 不仅仅是对象, 数组和字符串也是可以获取entries的
// 数组获取entries, 会把数组索引作为数组的key
console.log(Object.entries([1,2,3]));

// 同理字符串也是一样
console.log(Object.entries("123"));