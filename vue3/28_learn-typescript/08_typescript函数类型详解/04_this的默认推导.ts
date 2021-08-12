// 默认情况下在info对象里面函数对默认明确期类型就是info对象
const info = {
  name: "tang",
  eating() {
    console.log(`${this.name}  eating`)
  }
}

info.eating()