const str = ""

// 在进行判断的时候我们通常会用逻辑或进行判断, 但是这样有一个弊端, 它会自动转换 “”和0,返回false
const boo = str || "hello"

console.log(boo);

// 如果我们要更精准的判断, null或undefined时返回默认值
// 可以直接通过空值合并操作符
const boolean = str ?? "hhhh"
console.log(boolean, "111");