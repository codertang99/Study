var obj = {
  name: "tang",
  age: 20
}

// 设置所有属性不可配置, 即描述符的configurable: false
Object.seal(obj)  // 设置属性不可配置

delete obj.name   // 删除对象某个属性, 因为设置了seal方法, 删除无效
console.log(obj); 

// 设置所有属性是不可修改, 即描述符writable: false
// firstly, 通过统一配置writeable为false
for(var item in obj) {
  Object.defineProperty(obj, item, {
    writable: false
  })
}

// secondly, 通过Object.freeze方法
Object.freeze(obj)

/**
 * seal() -> 设置所有属性的描述符configurable: false
 * freeze() -> 设置所有属性的描述符writeable: false
 * preventExtensions() -> 设置对象禁止添加属性
 */