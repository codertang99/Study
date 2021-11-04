const cname = "hello"
const age = 20
const fn = function() {
  console.log("哈哈哈哈哈");
}

// 这是commonjs的导出方式, commonjs本质上是导出的module.exports
// 这是是把一个新的对象的引用指向module.exports
module.exports = {
  cname,
  age,
  fn
}

/**
 * module.exports导出的对象和require引入的对象始终是同一个对象, 他们都指向同一个引用
 * exports.[属性]的方式只不过是往module.exports的同一个引用中添加属性而已
 * 如果对module.exports指向一个新的引用, exports的方式也随之失效
 * 无论对module.exports还是exports的重新指向, exports都将不能导出
 * 所以这里推荐使用module.exports, 其实commonjs规范里面, 是使用exports.的方式的
 * 只不过大家对这种引用对象的方式的理解, 随之改变直接使用module.exports的方式了
 */