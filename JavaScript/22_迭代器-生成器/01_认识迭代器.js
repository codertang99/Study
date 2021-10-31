/**
 * 什么是迭代器 -> 迭代器是一个对象, 并且实现了iterator protocol的对象
 * 下面是基本结构 -> 迭代器对象必须实现next方法, 它可以有0个或1个参数, 必须返回一个固定格式的对象
 * {
 *   next: function() {
 *      return { done: false/true,  value: ""  }
 *    }
 * }
 */

const names = ["tang", "aewr", "123"]

let index = 0

// 这是一个针对names数组创建的一个迭代器对象
const namesIterator = {
  next: function() {
    if(index < names.length) {
      return {
        done: false,
        value: names[index++]
      }
    } else {
      return {
        done: true,
        value: undefined
      }
    }
  }
}

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());