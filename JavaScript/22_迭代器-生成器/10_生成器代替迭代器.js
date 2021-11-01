// 这是一个实现创建针对数组的迭代器对象
// 这里可以直接使用generator来代替自定义迭代函数, 使用生成器函数
function* createIteratorArr(arr) {

  // for(const value of arr) {
  //   yield value
  // }

  // 这种方法相当于上面的语法糖
  // yield* 可以直接跟上一个可迭代对象
  yield* arr

}

const generator = createIteratorArr([123, 234, 345])

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// 直接使用生成器函数
function* createRange(start, end) {
  let index = start
  while(index < end) {
    yield index++
  }
}

function createRangeIterator(start, end) {
  return {
    [Symbol.iterator]: function() {
      let index = start
      return {
        next: function() {
          if(index < end) {
            return { done: false, value: index++ }
          } else {
            return { done: true, value: undefined }
          }
        }
      }
    }
  }
}

const range = createRangeIterator(10, 20)
for(const r of range) {
  console.log(r);
}