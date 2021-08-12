/**
 * 1. 通过type定义类型
 * 2. 通过interface定义类型
 *    可以定义readonly只读类型和可选类型, 与type定义类似
 */

type InfoType = {
  name: string,
  age: number
}

interface IInfoType {
  name: string,
  age: number,
  friends?: {
    name: string,
    readonly age: number
  }
}

const info: IInfoType = {
  name: "tang",
  age: 10,
  friends: {
    name: "helo",
    age: 123
  }
}