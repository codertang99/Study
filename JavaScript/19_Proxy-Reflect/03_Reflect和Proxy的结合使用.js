/**
 * Reflect是为了规范化之前JavaScript考虑不周到的地方集合起来的一个对象
 * 把一些原先Object.方式的功能函数, 都放置在Reflect对象中了, 也可以与Proxy结合使用
 */
const obj = {
  name: "tang",
  age: 29
}

const proxy = new Proxy(obj, {
  set: function(target, key, value, receiver) {
    // 上次我们是直接通过这里的target访问直接修改对象的, 而这样使用并不好, 我们应该尽量避免通过自己这样去操作
    // 这样会有些情况是处理不了的, 比如对象的.freeze,
    // target[key] = value
    // 而Reflect提供了一个接口供我们操作对象, 我们应该尽可能让JavaScript来帮我们操作
    // 通过Reflect set方法来帮我们操作
    const result = Reflect.set(target, key, value, receiver)
    // 这里的result是操作成功或失败的一个反馈
    console.log(result);
  },
  // 让Reflect来帮我们操作
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})

console.log(proxy.name);

function Person(name, age) {
  this.name = name
  this.age = age
}

function Student() {
}

const p = new Person("tang", 29)
// 这里通过new Person可以访问对象, 它是一个Person标识的对象
console.log(p);
// 同时创建的对象它的隐式原型也等于构造函数的显示原型
console.log(p.__proto__ === Person.prototype);

// 在这里相当于给我们提供了另一种方式来调用构造函数, 是得带有复用类似父类构造函数最终创建在子类对象上
const s = Reflect.construct(Person, ["hhh", 100], Student)
// 这里打印的是Student对象, 同时也是student的原型相等
console.log(s);