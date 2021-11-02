// 这是一个模拟的网络请求
function getData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params)
    }, 2000);
  })
}

// 1. 如果我们要多次请求处理
// 这样的代码是不易阅读的, 出现回调地狱
// getData("aaa").then(res => {
//   getData(res + "bbb").then(res => {
//     getData(res + "ccc").then(res => {
//       console.log(res);
//     })
//   })
// })


// 2. 利用generator的方式进行
// 但是这样显然太过繁琐, 我们可以封装一个函数传入对应生成器函数最终自动执行
function* getDataGenerator() {

  const value1 = yield getData("aaa")

  const value2 = yield getData(value1 + "bbb")

  const value3 = yield getData(value2 + "ccc")

  const value4 = yield getData(value3 + "ddd")

  console.log(value4);
}

// const generator = getDataGenerator()

// generator.next().value.then(res => {
//   // aaa
//   generator.next(res).value.then(res => {
//     // aaabbb
//     generator.next(res).value.then(res => {
//       // aaabbbccc
//       generator.next(res).value.then(res => {
//         // aaabbbcccddd
//         generator.next(res)
//       })
//     })
//   })
// })


// 自己定义一个递归函数进行执行
function execGn(exeGene) {
  const generator = exeGene()

  function exec(params) {
    const result = generator.next(params)
    if(result.done) return result.value
    result.value.then(res => {
      exec(res)
    })
  }

  exec()

}

// execGn(getDataGenerator)

// 第三方库
const co = require("co")
co(getDataGenerator)

// ES8出现的async/await 本质上就是generator -> *相当于就是async yield相当于就是await