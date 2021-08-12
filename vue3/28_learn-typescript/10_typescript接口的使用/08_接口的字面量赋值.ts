interface IInfo {
  name: string,
  age: number
}

// 接口类型中定义 在字面量赋值直接赋值对象必须严格参照interface定义的属性进行类型推导否则报错
// const info: IInfo = {
//   name: "tang",
//   age: 10,
//   eatting() {

//   }
// }

const infos = {
  name: "tang",
  age: 100,
  eating() {
    console.log("chi")
  }
}
// 而通过对象引用直接赋值, 只要符合interface定义对象方法, 即使有多余属性, typescript会对其进行freshness
// 自动过滤检测, 从而使其更具灵活
const info: IInfo = infos