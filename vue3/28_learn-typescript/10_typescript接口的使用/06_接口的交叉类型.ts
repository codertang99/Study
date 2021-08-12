// type采用联合类型
type Direct = "Left" | "Right"

// type即是number类型又是string类型、显然这种是never不可能发生的类型
type MyType = number & string

interface IAction {
  (): void
}

interface IInfo {
  name: string,
  age: number
}
// 在定义多个接口是， 想实现两个接口、但又不想再次定义新的接口则可以使用交叉类型
type MyType2 = IAction & IInfo
