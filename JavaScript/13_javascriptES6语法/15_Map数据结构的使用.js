/**
 * Map数据结构是用来存储映射关系的, key - value的形式
 * 跟我们传统对象模式 -> key 中都是会转换成字符串的这是要知道的
 * 如果我们使用引用数据类型方式作为key, 会自动转换字符串形式
 */

const a = {}
const b = {}

var obj = {
  name: "tang",
  [a]: "hhh",
  [b]: "cc"
}
// { name: 'tang', '[object Object]': 'cc' }
// 会返回[object Object]形式,而且只有一个, 是因为自动转换成字符串形式, 所以覆盖成一个
console.log(obj);

// 使用map方式定义数据类型
const map = new Map()
// 使用set方法设置key-value, 可以使用引用类型方式设置key
map.set("a", "a")
map.set(obj, "cc")
map.set(a, "ddd")
console.log(map);
console.log("--------");
// foreach方式直接遍历出value值
map.forEach((item) => {
  console.log(item);
})
// 查看map存储的大小
console.log(map.size);
// 获取所有的key
console.log(map.keys());
// 获取所有的value
console.log(map.values());
// 根据key值获取value
console.log(map.get(a));
// 清除map中所有数据
map.clear()
console.log(map);
// has delete等等

const object = new Object([[a, "aaa"], [b,"bbb"]])
console.log(object);
console.log("-----------");
// for of循环遍历map映射, 返回的是一个数组对象包含key-value, 可以直接结构出key-value
for(const keys of object) {
  console.log(keys);
}