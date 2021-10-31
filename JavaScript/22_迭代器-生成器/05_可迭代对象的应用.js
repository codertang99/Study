/**
 * 那么可迭代对象的应用有哪些呢?
 */

var obj = {
  name: "tang",
  age: 20
}

// 这样遍历的对象是会报错的 -> 因为对象不是一个可迭代对象, 它没有实现 `@@Iterable protocol`
// for(let o of obj) {
//   console.log(o);
// }

var names = [123, 234, 345]
// 而数组是可以通过for of 方式进行遍历的  -> 这是因为它是一个可迭代的对象
// 所有for of的本质是通过iterable可迭代对象的方法进行遍历的 -> 相当于一个语法糖, 它会自动去调用next方法并取对应value的值
for(let i of names) {
  console.log(i);
}

/**
 * 而类似的应用场景还有很多 -> 想数组的的解构和扩展本质上也是迭代器对象
 * 当然这里需要注意一点 -> 对象的解构不是通过迭代器对象
 */

// Set数据解构可以传入一个可迭代对象, 这也是一个应用场景
const set = new Set([123, 234, 345])

for(let s of set) {
  console.log(s);
}

// 还有Array.from, Promise.all都是可迭代对象