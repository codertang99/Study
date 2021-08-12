// 对于对象类型一般用interface定义, 普通类型用type定义即可

// 接口可以进行重复定义, 然而不会进行覆盖, 会直接合并
interface IType {
  name: string
}

interface IType {
  age: number
}

const p: IType = {
  name: "tang",
  age: 10
}

// 定义同一type会直接报error
// type IS = { name: string }
// type IS = { age: number }

const div = document.getElementById("app") as HTMLDivElement

// 定义window接口会直接合并window而直接可以设置全局的属性
interface Window {
  age: number
}