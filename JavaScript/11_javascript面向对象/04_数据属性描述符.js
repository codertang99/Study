/**
 * 默认情况下 -> 
 *    通过字面量形式定义对象, 对应value, configurable, enumerable, writable都为true, value是对象值
 */

var obj = {
  name: "tang",
  age: 20
}

// 数据属性描述符
Object.defineProperty(obj, "address", {
  //对属性value的设置 -> 默认情况为undefined
  value: "赣州市",
  // 属性是否是可以被配置的, delete删除或再被重新定义配置 -> 默认情况为false
  configurable: true,
  // 表示该属性是否是可以被枚举的, for in 循环, Object.keys等等  -> 默认情况为false
  enumerable: true,
  // 表示该属性是否是可以被修改的 -> 默认情况为false
  writable: true
})
