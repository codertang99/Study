var obj = {
  name: "tang",
  age: 29
}

// 单个对象属性的监听
// Object.defineProperty(obj, "name", {
//   configurable: true,
//   enumerable: true,
//   set: function(value) {
//     this._name = value
//   },
//   get: function() {
//     return this._name
//   }
// })

// obj.name = "!23"
// console.log(obj.name);

// 拿到所有的key进行遍历, 对多个属性进行监听
Object.keys(obj).forEach((item) => {
  let value = obj[item]
  Object.defineProperty(obj, item, {
    set: function(newValue) {
      value = newValue
    },
    get: function() {
      return value
    }
  })
})

console.log(obj.name);
obj.name = "!111"
console.log(obj.name);

console.log(obj);