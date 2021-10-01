// 默认情况下在浏览器shell中, this执行window对象
// 默认在Node环境下, this指向的是 {}对象, 其实node中会有一个 module -> func -> call({}) 这样的一个过程的
console.log(this);