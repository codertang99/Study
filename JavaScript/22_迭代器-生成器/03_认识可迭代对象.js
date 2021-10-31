/**
 * 什么是可迭代对象, 它跟迭代器对象是一样的吗？ -> 可迭代对象是实现iterable protocol协议的返回一个迭代器对象的一个对象
 *  -> 在这里可以把这个理解为从属关系, 可迭代对象是实现了[Symbol.iterator]函数返回了一个迭代器对象
 *  -> 可迭代对象是实现 iterable protocol协议的 `@@iterator` -> 在JavaScript的表现形式是[Symbol.iterator]
 */

// 在这里以第一个迭代器对象为例子

// 它把所有分散的元素都集合到一个对象中
const iterable = {
  names: ["tang", "lucy", "lili"],
  // 这里是一个方法
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: () => {
        // 这里有一个this指向的问题, 所以上面的函数使用箭头函数
        if(index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

const a1 = iterable[Symbol.iterator]()
console.log(a1.next());
console.log(a1.next());
console.log(a1.next());
console.log(a1.next());

const a2 = iterable[Symbol.iterator]()
console.log(a2.next());
console.log(a2.next());
console.log(a2.next());
console.log(a2.next());