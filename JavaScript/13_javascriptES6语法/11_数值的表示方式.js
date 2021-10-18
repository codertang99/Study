// 数值的表示方式、

// 二进制
const a = 0b111

// 十进制
const b = 100

// 八进制
const c = 0o1237

// 十六进制
const d = 0xad3

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// ES2021 -> ES12
// 这种方式只是给较大的数字的一种连接方式而已, 便于阅读, 并无任何区别
const num = 10_00_00_00
console.log(num);