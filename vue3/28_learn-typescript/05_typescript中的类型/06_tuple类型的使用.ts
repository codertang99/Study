// 数组通常建议放类型统一的值
let arr1: any[] = ["123", 123, false]

console.log(arr1[0])

// 元组类型可以放自己特性的类型, 可以根据索引确定类型
let arr2: [string, number, boolean] = ["123", 123, true]

console.log(arr2[0])