// 这是一个实现创建针对数组的迭代器对象
function createIteratorArr(arr) {
  let index = 0
  return {
    next: function() {
      if(index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

// 返回一个迭代器对象
const number = createIteratorArr([123, 123,34])

console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());