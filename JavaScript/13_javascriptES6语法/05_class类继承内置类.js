/**
 * JavaScript中如果对它内置类使用的方法不满意
 * 还可以对内置类进行扩展
 */

var arr = new Array(1, 2, 3, 4, 5)
console.log(arr);
console.log(arr.length);

// 新创建一个类继承自内置类, 对内置进行扩展
class MArray extends Array {
  firstItem() {
    return this[0]
  }
  lastItem() {
    return this[this.length - 1]
  }
}

var mArr = new MArray(1, 2, 3, 4, 5)
console.log(mArr);
console.log(mArr.firstItem());  // 获取数组第一个元素
console.log(mArr.lastItem());  // 获取数组的第二个元素