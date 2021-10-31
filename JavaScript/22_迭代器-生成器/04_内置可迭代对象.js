// 这是一个数组对象, 相当于是用new Array创建出来
var names = [123, 234, 345]

// 而数组对象里是有实现[Symbol.iterator]的内置可迭代对象的
const arr = names[Symbol.iterator]()
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());

/**
 * 而很多数组结构都有内置的可迭代对象的
 *  -> String、Array、Map、Set、arguments对象、NodeList集合； -> 这些都是可迭代对象
 */