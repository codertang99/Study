// 传入不定量参数至函数数组中
function fun(...args: string[]): void {
  console.log(args) // 此时传入的参数为一个数组

  let str: string = "";

  for(let ar of args) {
    str += ar
  }
  console.log(str)
}

fun("1", "2", "3", "4", "5")

export {}