// 面向对象, 是对现实生活的一种抽象
// 1. new Object的方式
var obj = new Object()
obj.name = "tang"
obj.age = 19
obj.height = 1.99
obj.running = function() {
  console.log(this.name + "running");
}
console.log(obj);

// 2. 通过字面量的方式
var obj2 = {
  name: "aa",
  age: 20,
  eatting: function() {
    console.log(this.name + "eatting");
  }
}
console.log(obj2);