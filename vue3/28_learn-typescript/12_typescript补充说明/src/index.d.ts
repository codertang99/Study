// 自己定义模块声明
declare module "lodash" {
  export function join (arr: ayn[]): any
}

declare let name: string
declare let age: number
declare let height: number

declare function message(msg: string): string

declare class Person {
  private name: string
  private age: number

  constructor(name: string, age: number)
}