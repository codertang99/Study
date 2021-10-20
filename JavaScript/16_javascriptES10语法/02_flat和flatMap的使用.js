// 可以通过数组的flate方法对多维数组进行降维
const arr = [[1], 2, 3, 5, 6, 10, [12, 12, [123, [1]]]]
console.log(arr);

// 通过flate方法传入深度解析几维, 如果没有默认1
const newArr = arr.flat(3)
console.log(newArr);

// flateMap 方法应用
// 如果我们要对数组内按某种方式分割组成一个新的数组
const array = ["hell world", "您好 呀", "opposite wesi"]

// 只能通过自身遍历方式提取出新结果
for(const value of array) {
  // console.log(value);
  const va = value.split(" ")
  for(const a of va) {
    console.log(a);
  }
}

// 同样是通过遍历但是再进行操作返回的多维数组会进行降维操作
const a = array.flatMap((item) => {
  // [[hello, world]] -> 类似这种形式, 通过降维操作返回一个一维数组
  return item.split(" ")
})
console.log(a);

// 通过map方式返回的就是一个多维数组, 可以自己进行一个flat进行降维
console.log(array.map((item) => {
  return item.split(" ")
}));