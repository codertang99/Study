/**
 * 需要注意的是js中没有严格意义上的封装, 通过下划线定义的私有变量只用作一种规范
 * 还是可以通过点的方式进行访问修改, 需要知道并遵守下划线定义为私有变量
 */
 var obj = {
  name: "tang",
  _age: 20,
  _height: 1.99,
  // 对象里面的get/set相当于是描述符中的一种简写, 带有enumerable和configurable为true的简写
  get height() {
    return this._height
  },
  set height(value) {
    this._height = value
  }
}

// 可以通过defineProperties对对象多个属性进行操作
Object.defineProperties(obj, {
  name: {
    writable: true,
    enumerable: true,
    configurable: true
  },
  address: {
    value: "上海市",
    enumerable: true,
    configurable: true,
    writable: true
  },
  age: {
    enumerable: true,
    configurable: true,
    get: function() {
      return this._age
    },
    set: function(value) {
      this._age = value
    }
  }
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));  // 获取某个对象某个属性的描述符
console.log(Object.getOwnPropertyDescriptors(obj));   // 获取某个对象所有属性的描述符