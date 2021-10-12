// 可以通过字面量的方式对对象进行定义添加修改等等等
var obj = {
  name: "tang",
  age: 20
}

// 也可以使用Object的defineProperty方法,定义或修改现有对象属性 参数[(object, prop, descript)]
// 可以分为 数据属性描述符和存取属性描述符
Object.defineProperty(obj, "height", {
  // 属性描述符, 可以对对象属性进行具体的配置
  value: 1.99
})