// 这是一个对象, 其内存表现在堆内存中存储该对象, 而obj引用该堆内存中的地址
const obj = {
  name: "tang",
  age: 20,
  friends: {
    name: "aaa",
    age: 20,
    friends: {
      name: "lucy",
      age: 23
    }
  }
}

// 这样只是把obj的引用地址赋值给obj1, 如果进行操作, 他们操作的是同一块空间
const obj1 = obj

// 浅拷贝, 只对外层的对象进行重新赋值, obj2引用的是新地址, 但里面的引用数据和原先对象的引用数据是一致的, 如果修改会一同修改
const obj2 = {...obj}

// 通过JSON.stringify的方式进行深拷贝, 对对象进行stringify序列化后再parse解析, 完全对该对象的深拷贝
// 但需要注意的是, JSONstringify这种方式, 不能拷贝对象有函数属性, 因为JSON格式里面没有函数, 在进行转换的时候, 会自动删除
const obj3 = JSON.parse(JSON.stringify(obj))

obj3.age  = 2000
console.log(obj);