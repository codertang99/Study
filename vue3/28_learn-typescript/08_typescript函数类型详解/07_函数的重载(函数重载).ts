// 函数的重载、函数参数类型不同, 利用同一函数不同实现来实现重载
// 多个函数重载声明, 一个广泛函数实现

function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;

// 有实现体的函数是不能被直接调用
function sum(num1: any, num2: any): any {
  return num1 + num2
}

const total = sum("123", "123")
const total2 = sum(123, 12312)

// sum({name: "tang"}, {age: 123})  // 此类型没有被定义重载, 不能被直接调用

console.log(total, total2)

export {}