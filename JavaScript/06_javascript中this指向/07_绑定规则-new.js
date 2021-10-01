// 在构造函数进行new的过程中, 也是会隐式的绑定this的
// 在构造函数new的过程中, 会隐式的创建的一个对象, 同时把this指向该对象中
// 可以参考简单工厂函数的执行调用理解
function Person(name, age) {
  this.name = name
  this.age = age
}

var p1 = new Person("tang", 11)
console.log(p1);

var p2 = new Person("hhh", 22)
console.log(p2);