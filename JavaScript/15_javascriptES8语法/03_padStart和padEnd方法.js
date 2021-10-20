const str = "123123"

// 对字符串进行填充, 第一个参数表示填充后的长度, 第二个表示用什么填充
const newStr = str.padStart(9, "*")
console.log(newStr);

// 同理padEnd也一样
const nStr = str.padEnd(100, "*")
console.log(nStr);

// 应用场景, 可以对银行卡, 号码等添加掩盖
const bankNum = "1123123123123123123132"
// 获取银行卡号后四位
const endNum = bankNum.slice(-4)
const fillNum = endNum.padStart(18, "*")
// 填充过后的卡号
console.log(fillNum);