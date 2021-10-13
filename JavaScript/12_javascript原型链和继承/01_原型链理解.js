var obj = {
  name: "tang",
  age: 20
}

// 此时通过obj.的方式找不到address, 那么便会在对象原型中即__proto__对象中找address
console.log(obj.address);

// 我们也可以构造一个原型对象

obj.__proto__ = {
}

obj.__proto__.__proto__ = {
}

obj.__proto__.__proto__.__proto__ = {
}

obj.__proto__.__proto__.__proto__.__proto__ = {
  address: "赣州市"
}

// 通过原型链的方式一层一层往上找, 如果没有则返回undefined
console.log(obj.address);