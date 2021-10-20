const obj = {
  name: "tang",
  age: 19
}

// 原本可以通过Object.keys获取对象的所有key值, 返回一个数组
console.log(Object.keys(obj));

// 获取对象所有的value值属性
console.log(Object.values(obj));

// 如果传入字符串则获取每个字符
console.log(Object.values("acb"));