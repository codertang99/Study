const info = {
  name: "tang",
  sayHello
}

type InfoType = { name: string }

function sayHello(this: InfoType, message: string) {
  console.log(this.name, message)
}

// 隐式绑定
info.sayHello("hello")

// 显示绑定
info.sayHello.apply({ name: "kobe" }, ["tang"])
info.sayHello.call({ name: "coder" }, "why")

export {}