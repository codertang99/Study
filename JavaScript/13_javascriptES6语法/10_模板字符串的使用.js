// 模板字符串便于操作和拼接字符串 ``

const name = "tang"
const age = 19
const height = 1.89

// 不便于拼接容易产生错误
const str = "my name is " + name + " age is " + age + " height is " + height
console.log(str);

const str2 = `my name is ${name} age is ${age} height is ${height}`
console.log(str2);


// 标签模板字符串
function foo(x, y ,z) {
  console.log(x, y, z);
}

// 采用标签模板字符串的方式调用函数 在模板中会当作数组传入第一个参数
// 如果中间插入变量, 会分割字符串, 字符串当作数组, 传入的变量放入后面参数中
foo`Hel${1}loWorld`
// 应用场景, styled-components