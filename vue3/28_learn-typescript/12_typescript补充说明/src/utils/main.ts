// typescript 的内部作用域 namespace 
// 解决同一文件下同名的问题
export namespace time {
  export function format(str: string) {
    return "2021-08-07"
  }

  export const name: string = "tang"
}

export namespace number {
  export function format(str: number) {
    return 123123
  }
}

console.log(time.format("hello"))
console.log(number.format(123))