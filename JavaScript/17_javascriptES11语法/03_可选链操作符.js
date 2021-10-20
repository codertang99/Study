const obj = {
  name: "tang",
  friends: {
    name: "lucy",
    friends: {
      name: "hhhhh"
    }
  }
}

// 正常来讲是都可以进行访问的, 但是多数数据都是网络请求方式多层访问这样容易出现undefined访问
console.log(obj.friends.friends.name);

// 提供了更加安全的一种方式进行访问操作
console.log(obj.friends?.friends?.name);