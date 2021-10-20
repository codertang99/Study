// 对于对象销毁一般代码是不能够监听的在这里提供了一个类, 注册监听

let object = {
  name: "tang"
}

// 构造函数在new同时, 传递一个回调函数, 注意这里需要在浏览器进行测试, Node执行完之后会结束进程
const finalizationRegistry = new FinalizationRegistry((value) => {
  console.log("内存被释放了~", value);
})

// 传入被注册的对象, 和描述该对象的标志, 方便再回调中进行区分
finalizationRegistry.register(object, "我是object对象")

// 在对象被置空后不是立即被销毁的, 而是不定期进行释放销毁
object = null