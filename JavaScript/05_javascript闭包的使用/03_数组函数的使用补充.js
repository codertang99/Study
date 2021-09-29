var arr = [1, 34, 24, 11, 100]

var newArr = []
for(var i=0; i<arr.length; i++) {
  if(arr[i] % 2 === 0) newArr.push(arr[i])
}

console.log(newArr);


// filter: 过滤
// 每项, 下标, 数组本身
var newArr2 = arr.filter(function(item, index, arr) {
  return item % 2 === 0
})

console.log(newArr2);

// forEach: 迭代
// 每项, 下标, 数组本身
arr.forEach(function(item, index, arr) {
  console.log(item, index, arr);
})

// map: 映射
// 每项, 下标, 数组本身
var newArr3 = arr.map(function(item, index, arr) {
  return item * 10
})
console.log(newArr3);

// find/findIndex: 找到对应项, 索引
var item = arr.find(function(item, index, arr) {
  return item === 11
})
console.log(item);

var index = arr.findIndex(function(item, index, arr) {
  return item === 11
})
console.log(index);

// reduce: 累加
// fun(previous, item), initial
var total = arr.reduce(function(preValue, item, index, arr) {
  return preValue + item
}, 0)
console.log(total);