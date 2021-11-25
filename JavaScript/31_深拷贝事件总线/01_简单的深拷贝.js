const s1 = Symbol("aaa")
const s2 = Symbol("bbb")
const obj = {
  cname: "tang",
  age: 20,
  sex: "男",
  friends: {
    cname: "lucy",
    age: 20,
    sex: "女"
  },
  foo: function() {
    console.log("foo");
  },
  [s1]: "ccc",
  s2: s2,
  own: obj
}

// 使用Object.assign方法实现的是浅拷贝
const newObj1 = Object.assign({}, obj)
obj.friends.age = 2000
// console.log(newObj1);

// 可以使用JSON特性来实现简单的深拷贝
const newObj2 = JSON.parse(JSON.stringify(obj))
console.log(newObj2);

newObj2.friends.cname = "hhh"
// console.log(obj);

/**
 * 使用JSON特性来实现的深拷贝, 有部分defect
 * 1-> 如果对象有function, 无法拷贝
 * 2-> 如果对象有Symbol, 无法拷贝
 * 3-> 如果对象存在循环引用, 拷贝会报错
 */