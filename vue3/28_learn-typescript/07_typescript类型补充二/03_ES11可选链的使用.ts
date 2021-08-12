type Info = {
  name: string,
  age: number,
  friends?: {
    name: string,
    age: number,
    girlFriends?: {
      name: string,
      age: number
    }
  }
}

const my: Info = {
  name: "tang",
  age: 19,
  friends: {
    name: "coder",
    age: 99
  }
}

console.log(my.friends?.girlFriends?.name)

// 可选链, 当属性不存在时, 直接返回undefined