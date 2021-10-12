var obj = {
  name: "tang",
  age: 20,
  _address: "赣州市"
}

// 存取属性描述符, 存取属性描述符的set和get不可和数据属性描述符的writable和value共存
// get和set方法的意义
// 1. 对对象中的某个属性进行私有化, 不对外暴露出去, 只提供get和set的方法
// 2. 对对象属性的存取进行访问截取, 可以截取存取过程的, 便于进行存取进行操作
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  // 在对address赋值的时候调用此方法
  set: function(value) {
    foo()
    this._address = value
  },
  // 在对address获取的时候调用此方法
  get: function() {
    bar()
    return this._address
  }
})

function foo() {
  console.log("对对象属性进行修改了");
}

function bar() {
  console.log("对对象属性进行访问了");
}

obj.address = "上海市"
console.log(obj.address);
obj.address = "成都市"
console.log(obj.address);
console.log(obj.address);