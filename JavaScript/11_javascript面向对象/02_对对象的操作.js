var obj = {
  name: "tang",
  age: 20,
  eatting: function() {
    console.log(this.name + "eatting");
  }
}

console.log(obj);
// 可以对对象属性进行修改
obj.name = "cobe"
console.log(obj);
// 删除对象属性
delete obj.age
console.log(obj);