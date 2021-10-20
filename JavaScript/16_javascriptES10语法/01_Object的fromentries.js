const obj = {
  name: "tang",
  age: 20
}

// 我们知道可以通过Object.entries方法转换成entries的数据
const entries = Object.entries(obj)
console.log(entries);

// 可以通过Object.fromEntries方式把entries转换回对象形式
console.log(Object.fromEntries(entries));


// 应用场景
// 这是url方式传递通信的数据
const queryString = "name=tang&age=19&height=1.99"
// 把query字符串通过URLSearchParams构造函数转换成URLSearchParams映射对象
const url = new URLSearchParams(queryString)
console.log(url);
// 通过遍历可以发现它内部是一个数组
for(const value of url) {
  console.log(value);
}
// 可以通过fromEntries的方式转换成对象方便使用
console.log(Object.fromEntries(url));