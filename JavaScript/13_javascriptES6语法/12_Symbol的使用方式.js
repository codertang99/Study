// Symbol es6之后新增的一种方式, 用于定义独一无二的值, 一般用作对象的key防止重复

// es6之前, key-value的方式, 最终对象的key还是会转换成字符串的
var obj = {
  name: "tang",
  age:19
}

// 而在我们新增key的时候为了防止重复, 可以使用Symbol的方式定义唯一的key
// 这样就定义出独一无二的Symbol值 -> 当然symbol函数里面可以放置属性的描述符
const a = Symbol("this is my symbol value")
console.log(a);

// 通过description的方式获取symbol属性的描述符
console.log(a.description);

// 通过计算属性的方式直接添加在对象里面
var object = {
  name: "tang",
  [a]: "symbol"
}

// 还有一种方式是通过Obejct.defineProperty()
Object.defineProperty(object, Symbol("new Symbol"), {
  configurable: true,
  writable: true,
  enumerable: true,
  value: "newSymbol"
})

// 也是通过括号的形式访问symbol属性的value
console.log(object[a]);
// 这种通过点的方式是获取不到的, 点的方式最终还是会被转换成字符串key的方式定义
console.log(object.a);

// 还有一个需要注意的是, 通过symbol 定义key的方式通过遍历/Object.keys()的方式是遍历不了的
console.log(Object.keys(object)); // 通过获取的只是最终转换成字符串key的方式的
for(const key in object) {
  console.log(key);
}

// 这种也只能获取字符串key的方式
console.log(Object.getOwnPropertyNames(object));

// 如果要获取Symbol定义key的可以通过另一种方式
console.log(Object.getOwnPropertySymbols(object));
// 遍历symbol定义的key对象
for(const key of Object.getOwnPropertySymbols(object)) {
  console.log(object[key]);
}


// 可以通过Symbol.for的方式定义相同key的的变量
const cc = Symbol.for("123")
console.log(cc);
const aa = Symbol.for("123")
console.log(aa);

// 它们是相等的
console.log(aa === cc);

// 通过Symbol.keyfor获取Symbol的key
const key = Symbol.keyFor(aa)
console.log(key);
console.log(Symbol.for(key) === cc);