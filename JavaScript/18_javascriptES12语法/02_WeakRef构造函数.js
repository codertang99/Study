const finalizationRegistry = new FinalizationRegistry((value) => {
  console.log("内存被释放了~", value);
})

let obj = {
  name: "tang"
}

// 这里是强引用, 如果对obj对象进行置空, o对象中还是会引用着该对象的, 对象不会进行回收
// let o = obj

// 这是一个构造函数, new一个弱引用的对象
let weakRef = new WeakRef(obj)

// 直接进行打印时空的
// console.log(weakRef);

// 如果要进行操作访问有直接的函数返回被引用的对象
// console.log(weakRef.deref());

finalizationRegistry.register(obj, "weakref")

obj = null

setTimeout(() => {
  console.log(weakRef.deref());
}, 10000);