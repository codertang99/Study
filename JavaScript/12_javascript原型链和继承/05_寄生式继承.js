var obj = {
  running: function() {
    console.log(this.name + "在跑步");
  }
}

/**
 * 之后创建的对象都继承自obj对象, 并对自己本身的对象进行扩展
 */

// 这样创建出来的对象就继承自obj, 需要添加属性直接在创建出来的对象中添加即可
// 但是这样有一个弊端, 如果有多个对象需要继承, 并同时要添加多个属性, 会出现冗余
var student = Object.create(obj)
student.studing = function() {
  console.log(this.name + "在学习");
}
student.name = "tang"

// 可以进行工厂函数的封装
/**
 * 继承式继承函数
 * @param {*} obj 传入需要继承的对象
 * @param {*} name 需要扩展的属性
 */
function studentCreate(obj, name) {
  var currObj = Object.create(obj)
  currObj.name = name
  currObj.studing = function() {
    console.log(this.name + "在学习");
  }

  return currObj
}

