// js中最大有效整数数字
// 通过MAX_SAFE_INTEGER获取
const maxNum = Number.MAX_SAFE_INTEGER
console.log(maxNum);

// 如果对最大值进行运算操作它是无法控制的, 不建议这么操作
console.log(maxNum + 1);
console.log(maxNum + 10);

// 在ES11中提供了一个新的最大值表示方式
// 直接在结尾处加n
const max = 999999999999999999999999999999999n
console.log(max);

// 注意: 对bigint数据进行操作的时候是不可以直接运算的, 需要把操作数转换成BigInt类型
// 其实在计算机内部也是对数据类型进行类隐式转换而已
console.log(max + 1n);
console.log(max + BigInt(1000));