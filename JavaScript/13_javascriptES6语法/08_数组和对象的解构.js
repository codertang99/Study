// 数组的解构
var arr = ["asd", "adsf", "we"]
console.log(arr[0], arr[1], arr[2]);


// 对数组进行依次结构, 同时设置默认值
var [item1, item2, item3, item4 = "item4"] = arr
console.log(item1, item2, item3, item4);

// 只解构出第一个元素, 其余元素成为一个新的数组
var [c1, ...newArr] = arr
console.log(c1, newArr);

// 只结构出第三个元素
var [,,c3] = arr
console.log(c3);


// 对象的解构

var obj = {
  name: "tang",
  age: 100,
  height: 1.11
}

// 对象的解构可以不按顺序, 可以设置默认值和, 新对象名称
var { name: newName = "hello", age, height } = obj