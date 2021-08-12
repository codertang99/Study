// 确定一个事实, names是一个数组类型, 但是数组中存放的是什么类型的元素呢
// 数组中最好存放固定的类型
// 类型注解: type annotaion
const names: Array<number> = [] // 不推荐(react jsx中是有冲突的)

const name2: string[] = []  // 推荐

// 数组中存放不同类型是不好的习惯
names.push(123)
names.push(1)

console.log(names)

export {}