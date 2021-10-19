// Set数据解构, ES6新增的数据解构, 用于存放一组不可重复的值

// 通过构造函数new的方式返回set对象
const set = new Set()

set.add(100)
set.add(10)
set.add(23)
set.add({})
set.add({})
set.add("")
set.add("")

// 这里需要注意的是, add如果添加重复的值是加不进去的, 还是只有一个同样的值
set.add(10)
console.log(set);

// set中的属性和方法
// 返回set数据解构中的大小
console.log(set.size);

// 判断某个值是否存在set中, 注意输入的是值
console.log(set.has(10));
console.log(set.has(""));

// 删除set中某个值, 返回布尔值
console.log(set.delete("1"));
console.log(set);

// 请输入所有set中的数据
set.clear()
console.log(set);

// 如何对set集合进行遍历
const setArr = new Set()
setArr.add(1)
setArr.add(2)
setArr.add(3)
console.log(setArr);

// 直接通过foreach方式遍历
setArr.forEach(function(item, index, arr) {
  console.log(item);
})

// 直接通过for of方式进行遍历
for(const value of setArr) {
  console.log(value);
}

// 对set集合转换成数组
console.log([...setArr]);
// 通过Array类的静态方法from， 传入一个可迭代的数据转换成为数组
console.log(Array.from(setArr));