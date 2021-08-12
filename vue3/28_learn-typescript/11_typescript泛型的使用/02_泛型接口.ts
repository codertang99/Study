// 通过泛型增加接口类型
interface IInfo<T> {
  name: T
}

const info: IInfo<string> = {
  name:"tang"
}

console.log(info)

export {}