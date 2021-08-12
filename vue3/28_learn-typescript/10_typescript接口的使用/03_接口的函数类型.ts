// type 定义函数类型, 推荐使用type定义函数类型
type Fun = (num1: number, num2: number) => number

interface IFun {
  (str1: string, str2: string): string
}

const aInfo: IFun = (str: string, str2: string) => {
  return str + str2
}

console.log(aInfo("!", "2"))